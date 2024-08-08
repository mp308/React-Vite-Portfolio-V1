import React from "react";

function Footer() {
    return (
        <div className="bg-black py-8 text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                <div className="flex flex-col items-center mb-6 md:mb-0">
                    <h1 className="text-2xl font-bold mb-2">Contact</h1>
                    <p className="text-sm text-gray-400">Bangkok, Thailand</p>
                    <p className="text-sm text-gray-400">Phone: 094-554-1469</p>
                    <p className="text-sm text-gray-400">Email: spphoto308@gmail.com</p>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-2">Follow Us</h1>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/fifa.rock.90/" className="text-gray-400 hover:text-white">Facebook</a>
                        <a href="https://github.com/mp308" className="text-gray-400 hover:text-white">GitHub</a>
                        <a href="https://www.instagram.com/mooyoungbongkancha/?hl=en" className="text-gray-400 hover:text-white">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
