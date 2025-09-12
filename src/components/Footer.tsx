
function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <span className="text-gray-300">Made with ❤️ by Shubh</span>
      </div>
    </footer>
  );
}
export default Footer;