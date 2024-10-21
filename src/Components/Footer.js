function Footer(params) {
    return (
        <div>
            <footer className="text-gray-600 body-font bg-[#231F20] p-6 ">
                <div className="container mx-auto flex flex-col md:flex-row md:items-start md:justify-between py-24 px-5">
                    <div className="w-full md:w-1/2 flex-shrink-0 mx-auto text-center md:text-left">
                        <img
                            src={'https://www.interword.hu/public/ico/logo-white-hu.svg'}
                            alt="Logo"
                        />
                        <p className="mt-8 text-sm text-white">
                            8200 Veszprem, Ovaros ter 2.
                        </p>
                        <p className="mt-8 text-sm text-white">
                            info@interword.hu
                        </p>
                        <p className="mt-8 text-sm text-white">
                            +36 30 992 2321
                        </p>
                    </div>

                    {/* Social Media Icons Section */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0">
                        <h2 className="text-white text-xl font-bold mb-4 text-center md:text-left">Follow Us</h2>
                        <div className="flex space-x-4">
                            {/* Facebook Icon */}
                            <a
                                href="#facebook"
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DAEE02] text-gray-900 hover:bg-white transition duration-300"
                            >
                                <i className="fab fa-facebook-f text-xl"></i>
                            </a>

                            {/* Instagram Icon */}
                            <a
                                href="#instagram"
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DAEE02] text-gray-900 hover:bg-white transition duration-300"
                            >
                                <i className="fab fa-instagram text-xl"></i>
                            </a>

                            {/* LinkedIn Icon */}
                            <a
                                href="#linkedin"
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DAEE02] text-gray-900 hover:bg-white transition duration-300"
                            >
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>

                            {/* TikTok Icon */}
                            <a
                                href="#tiktok"
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DAEE02] text-gray-900 hover:bg-white transition duration-300"
                            >
                                <i className="fab fa-tiktok text-xl"></i>
                            </a>

                            {/* Pinterest Icon */}
                            <a
                                href="#pinterest"
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#DAEE02] text-gray-900 hover:bg-white transition duration-300"
                            >
                                <i className="fab fa-pinterest text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="bg-[#231F20]">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">
                            © 2024 · interword
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
