import React, { useState } from 'react';
import { Modal, Card, Typography, Button } from 'antd';
import QRCodeGenerator from './QRCodeGenerator';
import { QrcodeOutlined } from '@ant-design/icons';

interface SuccessModalProps {
  visible: boolean;
  shortUrl: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ visible, shortUrl, onClose }) => {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleGenerateQRCode = () => {
    setShowQRCode(true);
  };
  return (
    <Modal
      title="URL Successfully Shortened"
      open={visible}
      onOk={onClose}
      onCancel={onClose}
      footer={null}
    >
      <Card>
        <Typography.Text strong>Shortened URL : </Typography.Text>
        <a href={shortUrl} target="_blank" rel="noopener noreferrer">
          {shortUrl}
        </a>
        {!showQRCode ? (
          <Button
            type="primary"
            color="cyan"
            variant="solid" 
            onClick={handleGenerateQRCode}
            icon={<QrcodeOutlined />}
            style={{ marginTop: "10px" }}
            >
            Generate QR Code
          </Button>
        ) : (
          <QRCodeGenerator url={shortUrl} />
        )}

      </Card>
    </Modal>
  );
};

export default SuccessModal;
