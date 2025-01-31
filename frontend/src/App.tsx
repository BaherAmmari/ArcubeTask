import React from 'react';
import { Layout, Typography } from 'antd';
import URLForm from './components/URLForm';
import { useURLContext } from './context/URLContext';
import SuccessModal from './components/SuccessModal';
import './App.css';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const { shortUrl, setShortUrl } = useURLContext();

  return (
    <Layout className="layout">
      <Header className="header">
        <Typography.Title level={3} className="header-title">
          Simple URL Shortener
        </Typography.Title>
      </Header>
      <Content className="content">
        <div className="form-card">
          <URLForm />
        </div>

        {shortUrl && (
          <SuccessModal
            visible={!!shortUrl}
            shortUrl={shortUrl}
            onClose={() => setShortUrl(null)}
          />
        )}
      </Content>
    </Layout>
  );
};

export default App;
