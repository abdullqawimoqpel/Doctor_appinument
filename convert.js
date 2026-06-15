const fs = require('fs');
const path = require('path');

const routesMap = {
  'MediBook___Landing_Page.html': 'page.tsx',
  'Find_Doctors___MediBook.html': 'find-doctors/page.tsx',
  'Dr__Sarah_Jenkins___MediBook_Profile.html': 'doctor/sarah-jenkins/page.tsx',
  'Book_Your_Appointment___MediBook.html': 'book/page.tsx',
  'Booking_Details___MediBook_Patient_Portal.html': 'patient/booking-details/page.tsx',
  'My_Bookings___MediBook_Patient_Portal.html': 'patient/my-bookings/page.tsx',
  'Rate_Your_Visit___MediBook.html': 'patient/rate-visit/page.tsx',
  'Schedule___MediBook_Provider_Portal.html': 'provider/schedule/page.tsx',
  'Availability_Settings___MediBook_Provider_Portal.html': 'provider/availability/page.tsx',
  'Services_Management___MediBook_Provider_Portal.html': 'provider/services/page.tsx',
  'Telehealth_Consultation___MediBook_Provider_Portal.html': 'provider/telehealth/page.tsx',
  'Platform_Analytics___MediBook_Admin.html': 'admin/analytics/page.tsx',
  'User_Management___MediBook_Admin.html': 'admin/users/page.tsx'
};

function htmlToJsx(html) {
  let jsx = html.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, ''); // Remove comments
  
  // Basic inline style conversion
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(rule => {
      const separatorIndex = rule.indexOf(':');
      if (separatorIndex > -1) {
        let [key, value] = [rule.slice(0, separatorIndex).trim(), rule.slice(separatorIndex + 1).trim()];
        key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[key] = value;
      }
    });
    return 'style={' + JSON.stringify(styleObj) + '}';
  });
  
  // Self close img, input, hr, br if not already self closed
  jsx = jsx.replace(/<(img|input|hr|br)([^>]*?)(?<!\/)>/g, '<$1$2 />');
  
  // Remove wrapping script/head tags from Stitch output and extract body
  const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  if (bodyMatch) {
    jsx = '<>\n' + bodyMatch[1] + '\n</>';
  }
  
  return jsx;
}

const screensDir = path.join(__dirname, 'src', 'screens_html');
const appDir = path.join(__dirname, 'src', 'app');

for (const [htmlFile, routePath] of Object.entries(routesMap)) {
  const filePath = path.join(screensDir, htmlFile);
  if (fs.existsSync(filePath)) {
    const componentHtml = fs.readFileSync(filePath, 'utf8');
    const jsx = htmlToJsx(componentHtml);
    
    // Create directory
    const routeDir = path.join(appDir, path.dirname(routePath));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    
    const componentCode = 'export default function Page() {\n  return (\n    ' + jsx + '\n  );\n}\n';
    const destFilePath = path.join(appDir, routePath);
    fs.writeFileSync(destFilePath, componentCode);
    console.log('Successfully created ' + destFilePath);
  } else {
    console.warn('File not found: ' + filePath);
  }
}
