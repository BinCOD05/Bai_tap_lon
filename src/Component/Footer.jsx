import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png'; // chỉnh đường dẫn logo nếu khác

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="max-w-[1280px] mx-auto px-4 flex flex-wrap justify-between gap-y-10">

                {/* Logo và mô tả */}
                <div className="w-full md:w-[200px]">
                    <div className="flex items-center gap-3 mb-3">
                        
                        <div>
                            <p className="text-lg font-bold">Meo den<sup className="text-orange-500">+</sup></p>
                            <p className="text-sm text-gray-400">Phim Mới and Chill</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-300">
                        PhimMoi and Chill - Website xem phim trực tuyến chất lượng cao, cập nhật phim mới nhất vietsub mỗi ngày, xem miễn phí hàng nghìn bộ phim HD/4K đa thể loại.
                    </p>
                </div>

                {/* Các cột liên kết */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-sm">

                    
                    {/* Trợ giúp */}
                    <div>
                        <p className="font-bold text-orange-500 mb-2">Trợ giúp</p>
                        <ul className="space-y-1 text-gray-300">
                            <li><Link to="#">Hỏi đáp</Link></li>
                            <li><Link to="#">Liên hệ</Link></li>
                            <li><Link to="#">Tin tức</Link></li>
                        </ul>
                    </div>

                    {/* Thông tin */}
                    <div>
                        <p className="font-bold text-orange-500 mb-2">Thông tin</p>
                        <ul className="space-y-1 text-gray-300">
                            <li><Link to="#">Điều khoản sử dụng</Link></li>
                            <li><Link to="#">Chính sách riêng tư</Link></li>
                            <li><Link to="#">Khiếu nại bản quyền</Link></li>
                            <li className="text-gray-500 mt-2">© 2025 PhimChill.Net</li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
