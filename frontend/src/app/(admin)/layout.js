export default function AdminLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {/* Layout admin riêng biệt, không có Header/Footer ở root */}
                {children}
            </body>
        </html>
    );
}