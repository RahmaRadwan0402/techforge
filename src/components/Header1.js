import React from 'react';

const Header1 = () => {
  return (
    <div style={{ backgroundColor: '#1E1E1E' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
          minHeight: '80vh',
          flexDirection: 'column',
        }}
        className="header-container"
      >
        <div style={{ color: 'white', textAlign: 'center' }} className="text-section">
          <h1>Transform Your<br /> Digital Vision Into Reality</h1><br />
          <h6 style={{ fontSize: '13px', color: 'darkgray' }}>
            Full-stack development solutions for modern businesses. We build scalable,<br />
            secure, and inovative digital experiences
          </h6>
          <div style={{ paddingTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button style={{
              color: 'white',
              backgroundColor: 'rgb(33, 120, 252)',
              fontSize: '10px',
              width: '130px',
              height: '28px'
            }}>
              Lets Build Together
            </button>
            <button style={{
              border: '1px solid rgb(33, 120, 252)',
              backgroundColor: '#1E1E1E',
              color: 'white',
              fontSize: '10px',
              width: '100px'
            }}>
              View Portfolio
            </button>
          </div>
        </div>

        <div style={{ marginTop: '20px' }} className="image-section">
          <img
            src={require("./imgs/WhatsApp Image 2025-04-20 at 5.55.02 PM.jpeg")}
            style={{ width: '70vh', maxWidth: '100%' }}
            className="responsive-img"
            alt=""
          />
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .header-container {
            flex-direction: row !important;
          }
          .text-section {
            text-align: left;
          }
          .image-section {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Header1;

