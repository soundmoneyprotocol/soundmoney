const LicensePage = () => {
  return (
    <>
      <div className='lightPrivacyBg md:px-32 px-8 space-y-8 md:py-40 pt-48 bg-center bg-cover bg-fixed text-sm'>
        <h1 className="text-3xl font-bold text-teal-500">License</h1>
        <p>Last updated: March 8, 2026</p>

        <section className='space-y-4'>
          <h2 className='text-xl font-bold'>License Grant</h2>
          <p>
            SoundMoney Protocol grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the SoundMoney platform, website, and associated services (collectively, the "Service") for your personal, non-commercial use, subject to the terms and conditions of this License Agreement.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-xl font-bold'>Permitted Uses</h2>
          <p>You may use the Service for:</p>
          <ul className='list-disc pl-6 space-y-2'>
            <li>Creating and managing user accounts</li>
            <li>Accessing music content and creator information</li>
            <li>Engaging with the SoundMoney community</li>
            <li>Participating in creator support and earnings programs</li>
            <li>Managing BEZY tokens and related transactions</li>
            <li>Accessing documentation and support materials</li>
          </ul>
        </section>

        <section className='space-y-4'>
          <h2 className='text-xl font-bold'>Restrictions</h2>
          <p>You agree not to:</p>
          <ul className='list-disc pl-6 space-y-2'>
            <li>Copy, modify, or adapt the Service or any part thereof</li>
            <li>Reverse engineer, decompile, or disassemble the Service</li>
            <li>Sell, transfer, or sublicense the Service to third parties</li>
            <li>Use the Service for any illegal or unauthorized purpose</li>
            <li>Remove or alter any proprietary notices or labels on the Service</li>
            <li>Access the Service through automated means (bots, scrapers, etc.)</li>
            <li>Interfere with or disrupt the Service or its servers</li>
            <li>Attempt to gain unauthorized access to the Service or its systems</li>
          </ul>
        </section>

        <section className='space-y-4'>
          <h2 className='text-xl font-bold'>Intellectual Property Rights</h2>
          <p>
            The Service, including all content, features, and functionality, is owned by SoundMoney Protocol, its licensors, or other providers of such material and is protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            User-generated content (music, posts, comments, etc.) remains the property of the content creator. By uploading content to SoundMoney, you grant SoundMoney Protocol a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content within the Service.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-xl font-bold'>Open Source Components</h2>
          <p>
            The SoundMoney Service may utilize open source software and libraries. Where applicable, the licenses for these components are respected in full accordance with their terms. For a complete list of open source components used, please refer to our GitHub repository or contact support.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-xl font-bold'>License Termination</h2>
          <p>
            This license is effective until terminated. Your rights under this license will terminate automatically without notice from SoundMoney if you fail to comply with any of its terms and conditions. Upon termination:
          </p>
          <ul className='list-disc pl-6 space-y-2'>
            <li>You must cease all use of the Service</li>
            <li>Any licenses granted to you will be revoked</li>
            <li>Your account may be suspended or terminated</li>
            <li>SoundMoney may pursue further legal remedies</li>
          </ul>
        </section>

        <section className='space-y-4'>
          <h2 className='text-xl font-bold'>Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. SOUNDMONEY PROTOCOL DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-xl font-bold'>Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, SOUNDMONEY PROTOCOL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM OR RELATING TO YOUR USE OF OR INABILITY TO USE THE SERVICE.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-xl font-bold'>Modifications to License</h2>
          <p>
            SoundMoney Protocol reserves the right to modify this License Agreement at any time. Changes will be effective immediately upon posting to the Service. Your continued use of the Service following the posting of revised terms means that you accept and agree to the changes.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-xl font-bold'>Contact Information</h2>
          <p>
            For questions or concerns regarding this License Agreement, please contact us at:
          </p>
          <p>
            <strong>SoundMoney Protocol</strong><br />
            Email: legal@soundmoneyprotocol.xyz<br />
            Website: www.soundmoneyprotocol.xyz
          </p>
        </section>
      </div>
    </>
  );
};

export default LicensePage;
