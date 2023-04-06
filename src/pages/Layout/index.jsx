import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Satın Alma', 'sub1', <UserOutlined />, [
    getItem('Satın Alma', '1'),
    getItem('Satın Alma Siparişlerim', '2'),
  ]),
  getItem('Satış', 'sub2', <UserOutlined />, [
    getItem('Sipariş', '3'),
    getItem('Siparişlerim', '4'),
  ]),
  getItem('Depo-Stok', 'sub3', <UserOutlined />, [
    getItem('Stok', '5'),
    getItem('Stok Liste', '6'),
  ]),
  getItem('Temel Veri', 'sub4', <UserOutlined />, [
    getItem('Kullanıcı Oluştur', '7'),
    getItem('Kullanıcı Yetkilendir', '8'),
    getItem('Veri Oluştur', '9'),
  ]),
];
const columns = [
    {
      name: 'Taşıma Birimi',
      selector: (row) => row.tasimaBirimi,
      className: 'name',
    },
    {
      name: 'Kullanıcı',
      selector: (row) => row.kullanici,
    },
    {
      name: 'İade kodu',
      selector: (row) => row.iadeKodu,
    },
    {
      name: 'Sipariş Numarası',
      selector: (row) => row.siparisNumarasi,
    },
    {
      name: 'Diğer No',
      selector: (row) => row.digerNo,
    },
    {
      name: 'Sipariş Tarihi',
      selector: (row) => row.SiparisTarihi,
    },
    {
      name: 'Site',
      selector: (row) => row.site,
    },
    {
      name: 'Sipariş Kanalı',
      selector: (row) => row.siparisKanali,
    },
    {
      name: 'Sistemde İade Bilgisi',
      selector: (row) => row.sistemdeIadeBilgisi,
    },
    {
      name: 'Kargo',
      selector: (row) => row.kargo,
    },
    {
      name: 'Red Kargo Mu?',
      selector: (row) => row.redKargoMu,
    },
    {
        name: '',
        selector: (row) => row.action,
      },
  ];

const tableData = [
    {
        id: 1,
        tasimaBirimi: "Muhammet",
        kullanici: "Erkan",
        iadeKodu: 123123,
        siparisNumarasi: 123123,
        digerNo: 'Veri Yok',
        SiparisTarihi: "05.04.2023",
        siparisKanali: "flo",
        site: "cimri",
        sistemdeIadeBilgisi: "Evet",
        kargo: "Aras",
        redKargoMu: "Hayır",
        action: [<button>Kabul Et</button>],
    },
    {
        id: 2,
        tasimaBirimi: "Elyase",
        kullanici: "Saglam",
        iadeKodu: 1231234,
        siparisNumarasi: 1231234,
        digerNo: 'Veri Yok',
        SiparisTarihi: "04.04.2023",
        siparisKanali: "flo",
        site: "cimri",
        sistemdeIadeBilgisi: "Evet",
        kargo: "Aras",
        redKargoMu: "Hayır",
    }
]
const Layout1 = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <DataTable columns={columns} data={tableData} classNames="dataTable" noDataComponent="Kayıt Bulunamadı" />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Layout1;