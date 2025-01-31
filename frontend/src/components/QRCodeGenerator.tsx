import React from "react";
import { QRCode, Typography } from "antd";
import './QrCodeStyle.css'
const { Text } = Typography;

interface QRCodeGeneratorProps {
    url: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ url }) => {
    if (!url) return null;

    return (
        <div className="qr-container">
            <div className="qr-wrapper">
                <QRCode
                    value={url}
                    size={150}
                    color="#67b26f"
                    bgColor="#f0f2f5"
                    className="qr-code"
                />
            </div>
            <Text type="secondary">
                Scan this QR code to visit the link
            </Text>
        </div>
    );
};

export default QRCodeGenerator;
