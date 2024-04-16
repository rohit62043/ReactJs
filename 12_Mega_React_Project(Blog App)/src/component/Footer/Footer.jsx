import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
    return (
        <footer className="bg-cyan-800 text-gray-300">
            <div className="container mx-auto py-12 px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
                        <Logo width="100px" />
                        <p className="mt-4 text-sm">
                            &copy; 2023. All Rights Reserved by Rohit.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
                        <h3 className="text-xs font-semibold uppercase mb-4">Company</h3>
                        <ul>
                            <li className="mb-2">
                                <Link to="/" className="text-sm hover:text-gray-400">Features</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="text-sm hover:text-gray-400">Pricing</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="text-sm hover:text-gray-400">Affiliate Program</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-sm hover:text-gray-400">Press Kit</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
                        <h3 className="text-xs font-semibold uppercase mb-4">Support</h3>
                        <ul>
                            <li className="mb-2">
                                <Link to="/" className="text-sm hover:text-gray-400">Account</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="text-sm hover:text-gray-400">Help</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="text-sm hover:text-gray-400">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-sm hover:text-gray-400">Customer Support</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
                        <h3 className="text-xs font-semibold uppercase mb-4">Legals</h3>
                        <ul>
                            <li className="mb-2">
                                <Link to="/" className="text-sm hover:text-gray-400">Terms & Conditions</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="text-sm hover:text-gray-400">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-sm hover:text-gray-400">Licensing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
