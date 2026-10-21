import Link from 'next/link';
import { LegalPage } from '../components/legal-page';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata('/terms');

export default function TermsPage() {
  return <LegalPage
    title="Terms of Service"
    intro="These terms govern the Delusionals mobile apps for iOS and Android. Our website introduces the product; the mobile apps provide the service."
    sections={[
      { id: 'scope', title: 'The service and these terms', content: <>
        <p>Delusionals is a social platform for personal ambitions called shots. You can create shots and steps, record progress, optionally share posts and photos, and follow, encourage, or talk with other users. “Delusionals”, “we”, and “us” refer to the service operator; “you” refers to the person using the service.</p>
        <p>These terms govern use of the iOS and Android apps. The informational website provides product information, legal documents, and links to app stores. Browsing the website does not create an app account or publish content.</p>
        <p>The <Link href="/privacy">Privacy Policy</Link> explains personal-data processing and your rights. The <Link href="/cookies">Cookie Policy</Link> distinguishes website technologies from storage used by the apps.</p>
      </> },
      { id: 'eligibility', title: 'Eligibility', content: <>
        <p>You must be legally permitted to use the service and able to enter into these terms under the law that applies to you. Where parental or guardian authorization is legally required, that authorization must be obtained before use.</p>
        <p>Do not use another person’s identity, misrepresent your authority to act for someone, or create an account to evade a lawful restriction. An app-store age rating is not a substitute for applicable legal age and authorization requirements.</p>
      </> },
      { id: 'accounts', title: 'Your account', content: <>
        <p>Sign in using a supported Apple or Google account and complete your Delusionals profile. Provide accurate information where required, choose a username you are entitled to use, and keep your sign-in account and device secure.</p>
        <p>You are responsible for your use of the service and the content you submit. Do not share access in a way that compromises another person’s privacy or security. If you suspect unauthorized access, secure your sign-in provider account and notify the service operator.</p>
        <p>Signing out or uninstalling the app does not close your account. Account closure is addressed in <Link href="#termination">Closing or restricting an account</Link>.</p>
      </> },
      { id: 'shots', title: 'Shots, progress, and outcomes', content: <>
        <p>A shot is a personal ambition, not a guarantee or a commitment by Delusionals to make an outcome happen. You decide what to attempt, which steps to take, and whether to share progress or a win.</p>
        <p>Use your own judgment about feasibility, safety, costs, and the permissions needed for an activity. Delusionals is not an emergency service or a substitute for professional advice. Community encouragement does not make a risky or unlawful activity appropriate.</p>
      </> },
      { id: 'content', title: 'Your content and ownership', content: <>
        <p>You retain ownership of the original content you submit. You must have the rights and permissions needed for your text, photos, and other material, including permission to share another person’s private information or image where required.</p>
        <p>To operate the service, you grant Delusionals a non-exclusive, worldwide, royalty-free license to store, host, copy, process, resize, transmit, and display your content for the features you use and the audience your settings permit. Service providers may perform those activities on our behalf only as needed to provide the service. This does not transfer ownership or give other users a general right to reuse your work.</p>
        <p>The license lasts while the content is held to provide the service and for any limited period necessary for lawful retention or removal from restricted backups. It does not authorize a new, unrelated use of private content. Deletion and retention are explained in the <Link href="/privacy#retention">Privacy Policy</Link>.</p>
      </> },
      { id: 'sharing', title: 'Public and private content', content: <>
        <p>New accounts are private by default, and new shots start as Just me. Creating a shot or completing a step does not automatically publish a post. Individual step descriptions remain private to their owner.</p>
        <p>On private accounts, shared shots and posts are limited to approved followers. On public accounts, shared shots and posts may be visible to other signed-in users who do not follow you. Profile information can remain discoverable even when an account is private.</p>
        <p>Review your audience before sharing or changing privacy settings. Comments and believes are connected to the shared post and visible to its permitted audience. Other people may keep screenshots or copies; changing settings or deleting content cannot retrieve copies outside our control.</p>
      </> },
      { id: 'community', title: 'Community responsibilities', content: <>
        <p>Respect the people taking their own shots. Do not use Delusionals to:</p>
        <ul>
          <li>Harass, threaten, stalk, impersonate, exploit, or discriminate against another person.</li>
          <li>Share unlawful content, child sexual abuse material, non-consensual intimate images, or material that violates another person’s privacy or intellectual-property rights.</li>
          <li>Run scams, send spam, manipulate interactions deceptively, or pressure someone into unsafe conduct.</li>
          <li>Access another account or private content without authorization, bypass access controls, distribute malware, or disrupt the service.</li>
          <li>Collect or reuse other users’ information without a lawful basis, including through unauthorized automated collection.</li>
        </ul>
        <p>A believe is encouragement, not verification of a person, a claim, or an activity. Do not present another user’s support as an endorsement they did not give.</p>
      </> },
      { id: 'moderation', title: 'Safety and content concerns', content: <>
        <p>You can block accounts and manage your followers. Blocking removes follow relationships and pending requests between the accounts and restricts access within the service. It does not erase copies of content someone already holds.</p>
        <p>Notify the service operator about content or conduct you believe violates these terms or the law. Include enough information to identify the account or content and explain the concern. Do not submit knowingly false or abusive notices.</p>
        <p>Where necessary and lawful, we may remove or restrict content, limit features, or suspend an account to address a breach, a security risk, or a legal requirement. Restrictions must be proportionate to the circumstances. Where required by law, we must provide reasons and an opportunity to challenge a restriction. You may request review of a decision affecting you.</p>
      </> },
      { id: 'termination', title: 'Closing or restricting an account', content: <>
        <p>You may stop using Delusionals and request account deletion through the mobile app’s account settings or by contacting the service operator. We may verify that a request comes from the account holder before acting on it.</p>
        <p>Closure removes the account and associated personal content and social records, subject to any lawful retention exception explained in the <Link href="/privacy#controls">Privacy Policy</Link>. It does not close your separate Apple or Google account. Uninstalling the app alone does not initiate deletion.</p>
        <p>We may restrict or terminate access where necessary to enforce these terms or meet a legal obligation, subject to applicable notice, review, and consumer-protection requirements. Closing an account does not remove rights or obligations that must continue by law.</p>
      </> },
      { id: 'intellectual-property', title: 'Delusionals and third-party rights', content: <>
        <p>The app software, website design, branding, and materials other than user content are protected by their respective intellectual-property rights. You may use them as needed to access the service lawfully. These terms do not transfer ownership of the Delusionals name, logo, or software.</p>
        <p>Respect other people’s content and any third-party licenses. Nothing in these terms limits a right or exception that applicable law does not allow us to restrict.</p>
      </> },
      { id: 'availability', title: 'Availability and app stores', content: <>
        <p>The service is delivered through the iOS and Android apps and requires a compatible device and network connection. Apple and Google supply their own store and sign-in services under separate terms. They do not become parties to your Delusionals account agreement simply because you download or sign in through their services.</p>
        <p>Features may require updates or be temporarily interrupted for maintenance, security, or technical reasons. We do not guarantee uninterrupted access or that another user’s content is accurate. Changes to the service must respect applicable legal and consumer rights.</p>
      </> },
      { id: 'responsibility', title: 'Responsibility and legal rights', content: <>
        <p>You are responsible for the lawfulness of your content and your own activities. Delusionals remains responsible for its obligations under applicable law. Responsibility for loss must be assessed under that law and the circumstances of the claim.</p>
        <p>Nothing in these terms excludes liability that cannot lawfully be excluded, removes mandatory consumer rights, or limits your data-protection rights.</p>
      </> },
      { id: 'changes', title: 'Changes to these terms', content: <>
        <p>The date above identifies the latest revision. If we materially change the agreement, we must give any notice and obtain any acceptance required by law before the change applies. A change does not remove rights that have already arisen.</p>
        <p>Any change involving personal-data use is also subject to the <Link href="/privacy#changes">Privacy Policy</Link>. Acceptance of these terms does not replace consent where data-protection law requires a separate choice.</p>
      </> },
      { id: 'contact', title: 'Questions and disputes', content: <>
        <p>Direct service questions, content concerns, and requests to review an account restriction to the Delusionals service operator. Include your username and enough detail to identify the issue, but never send a sign-in password or session token.</p>
        <p>Applicable mandatory law and the competent courts determine your legal protections and remedies. Nothing here prevents a consumer from relying on protections or bringing a claim in a forum available under applicable law. Privacy complaints may also be made to the competent data protection authority.</p>
      </> },
    ]}
  />;
}
