import React from 'react';
import Banner from "../../components/banner";
import Features from '../../components/features';
import Chat from "../../assets/icon-chat.png";
import Money from "../../assets/icon-money.png";
import Security from "../../assets/icon-security.png"

const index = () => {
  return (
    <div>
      <Banner/>
      <div className='bankinfo'>
        <Features 
          icon={Chat} 
          title="You are our #1 priority" 
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <Features 
          icon={Money} 
          title="More savings means higher rates" 
          description="The more you save with us, the higher your interest rate will be!"
        />
        <Features 
          icon={Security} 
          title="Security you can trust" 
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </div>
    </div>
  );
};

export default index;