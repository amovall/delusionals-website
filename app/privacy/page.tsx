import Link from 'next/link';
import { LegalPage } from '../components/legal-page';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata('/privacy');

export default function PrivacyPage() {
  return <LegalPage
    title="Privacy Policy"
    intro="This policy primarily explains how personal data is used in the Delusionals mobile apps for iOS and Android. Our informational website has a separate, limited role."
    sections={[
      { id: 'scope', title: 'Who and what this policy covers', content: <>
        <p>Delusionals is a social platform for personal ambitions called shots. The mobile apps let you create an account, plan steps, record progress, share stories, and interact with other users. In this policy, “Delusionals”, “we”, and “us” refer to the service operator responsible for this processing.</p>
        <p>The website introduces the product and provides product information, legal documents, and links to mobile app stores. Browsing it does not create an app account or give the website access to your shots. Website processing is explained in <Link href="#website">Visiting this website</Link>.</p>
      </> },
      { id: 'app-data', title: 'Information in the mobile apps', content: <>
        <ul>
          <li><strong>Account and sign-in information:</strong> an account identifier, the Apple or Google identity used to sign in, email where supplied, authentication records, and session credentials.</li>
          <li><strong>Profile information:</strong> your username, display name, optional biography and profile photo, account privacy setting, and profile setup status.</li>
          <li><strong>Shots and progress:</strong> titles, descriptions, steps, completion status and dates, progress percentages, optional cover photos, and audience choices.</li>
          <li><strong>Shared content:</strong> posts introducing a shot, progress updates and wins, captions, uploaded photos, comments, and replies.</li>
          <li><strong>Social activity:</strong> believes, follows, follow requests and their status, blocked accounts, and the dates associated with these actions.</li>
          <li><strong>Activity notifications:</strong> the user and content involved in an interaction, notification type, creation time, and whether a notification or follow request has been seen.</li>
          <li><strong>Technical connection information:</strong> information needed by our service providers to handle requests, such as IP addresses, request times, and authentication or service errors.</li>
        </ul>
        <p>You provide profile details and content directly. Other users generate information about you when they follow you, react to your posts, comment, or reply. Sign-in providers supply the identity information needed to authenticate you.</p>
        <p>An account and the required profile fields are needed for account-based features. Photos and a biography are optional. You choose whether to publish content. Avoid including sensitive information about yourself or someone else that is unnecessary for your shot.</p>
      </> },
      { id: 'authentication', title: 'Apple, Google, and your session', content: <>
        <p>The mobile apps support Apple and Google sign-in through Supabase Authentication. Apple sign-in on supported iOS devices uses the native Apple flow; other supported flows use a provider-controlled authentication window. We receive an identity token or authorization result, rather than your Apple or Google password.</p>
        <p>Provider information depends on your provider settings and choices. For example, an Apple relay email address may be supplied instead of your usual email. You choose your Delusionals profile information separately.</p>
        <p>The apps store session credentials using the device’s secure storage so you can stay signed in and the session can be refreshed. These credentials identify your session; they are not advertising identifiers. Signing out ends the app session, but does not delete your account.</p>
      </> },
      { id: 'purposes', title: 'Why we use your information', content: <>
        <ul>
          <li><strong>Provide your account:</strong> authenticate you, complete your profile, and keep you signed in.</li>
          <li><strong>Save your progress:</strong> store shots and photos, record completed steps, calculate progress, and keep your collection available across sessions.</li>
          <li><strong>Provide the social features you use:</strong> show content to its permitted audience, support discovery and follows, display believes and conversations, and provide activity notifications.</li>
          <li><strong>Apply your choices and protect the service:</strong> enforce audience settings and blocks, maintain access controls, investigate service problems, and address misuse.</li>
          <li><strong>Meet legal responsibilities:</strong> handle privacy requests and respond to legal requirements where they apply.</li>
        </ul>
        <p>The mobile apps described here do not integrate advertising networks, third-party analytics SDKs, or cross-app advertising tracking. Social activity records are used to deliver the app’s features.</p>
      </> },
      { id: 'legal-bases', title: 'Legal bases where GDPR applies', content: <>
        <p>We rely on performance of our agreement with you for processing necessary to provide your account, save your shots, and deliver the sharing and social features you request. Processing necessary to protect accounts and service integrity may rely on legitimate interests, balanced against your rights. Processing required by law relies on the relevant legal obligation.</p>
        <p>Where a separate optional use requires consent, that use requires a specific choice and consent can be withdrawn. Accepting the Terms of Service or granting an operating-system permission does not give blanket consent to unrelated processing.</p>
      </> },
      { id: 'visibility', title: 'Privacy and sharing', content: <>
        <p>New accounts are private by default and new shots start as <strong>Just me</strong>. A Just me shot is visible only to its owner. Creating a shot or completing a step does not automatically publish a post. The descriptions of your individual steps remain visible only to you, including when you share a progress percentage.</p>
        <p>On a private account, shared shots and posts are limited to approved followers. On a public account, shared shots and posts can be seen by other signed-in users, including people who do not follow you. Making your account public can therefore widen the audience for content you have already shared.</p>
        <p>Account privacy does not hide your entire profile. Your username, display name, biography, profile photo, and permitted social information can be visible to other signed-in users, subject to blocking. Your sign-in email and session credentials are not part of the profile displayed to other users.</p>
        <p>Comments, replies, and believes are associated with your account and the shared post. The post’s permitted audience can see its conversation and reactions, and the people involved may receive an activity notification.</p>
        <p>You can change an active shot to Just me. After confirmation, its linked posts and their conversations and reactions are removed. Privacy controls cannot recall screenshots or copies other people made while content was visible. Images already loaded or accessed through a previously issued image link may remain available until that copy or link expires.</p>
      </> },
      { id: 'permissions', title: 'Photos, permissions, and notifications', content: <>
        <p>You choose photos using the device’s image picker. Selected images are resized and converted before upload for use as a profile photo, shot cover, or post photo. Selecting a photo does not authorize uploading your entire photo library. You can decline selection or manage photo access through your device settings; text-based features remain available.</p>
        <p>The app’s photo flow uses existing images. It does not implement camera capture, microphone recording, contact import, or collection of precise device location. A location that you type into a shot or show in a photo is still part of the content you choose to provide.</p>
        <p>Activity notifications appear inside Delusionals and include follows, follow requests, believes, comments, and replies. They are distinct from operating-system push notifications. The apps described here do not register push tokens or send device push notifications.</p>
      </> },
      { id: 'providers', title: 'Service providers', content: <>
        <p>Supabase provides authentication, database, image storage, and real-time delivery for app activity. Apple or Google processes the sign-in flow you choose and the identity information exchanged through that flow. Their own privacy notices also apply to the services they provide independently.</p>
        <p>The informational website’s hosting provider delivers its pages and assets. Visiting an app-store link takes you to Apple or Google, where their own terms and privacy practices apply.</p>
        <p>Other app users receive the information made available by your profile and sharing choices. We may also disclose information where a valid legal requirement applies or where necessary and lawful to address security or abuse. We limit service-provider access to what is needed for their role.</p>
      </> },
      { id: 'storage', title: 'Storage, security, and international processing', content: <>
        <p>App account records and content are stored using Supabase database and storage services. Session credentials are also held in secure storage on your mobile device. Selected or processed photos and displayed content may have temporary local copies.</p>
        <p>Database access rules restrict records according to ownership, account privacy, and blocking. Profile photos, shot covers, and post images use private storage buckets with access-controlled, time-limited image links. A private account’s profile photo can still be available to other permitted signed-in users; private storage is not the same as an invisible profile.</p>
        <p>These controls do not make the service end-to-end encrypted or guarantee absolute security. The service and its providers process data to operate the apps.</p>
        <p>Where personal data is transferred outside the European Economic Area, applicable transfer rules must be met, using an appropriate legal mechanism such as an adequacy decision or suitable contractual safeguards. Data location cannot be inferred from where an app is downloaded.</p>
      </> },
      { id: 'retention', title: 'How long information is kept', content: <>
        <p>Retention depends on the purpose of each record. Account and profile information supports your active account; shots and posts remain available until you remove them or close your account; social records support the relationships and interactions to which they relate.</p>
        <p>When a record is no longer needed for its purpose, we delete it or irreversibly anonymize it. Limited information may need to be retained to comply with a specific legal duty, resolve a dispute, or protect against abuse, for only as long as that reason requires.</p>
        <p>Removal from the app and removal from backups, temporary caches, and technical logs are different processes. Any retained backup copy must be protected from ordinary use and removed through its applicable retention cycle. A legal preservation requirement may delay deletion of the affected information.</p>
      </> },
      { id: 'controls', title: 'Your controls and account deletion', content: <>
        <p>You can edit your profile, change account privacy, manage followers and follow requests, remove a believe, block or unblock accounts, and delete your own posts and comments. Deleting a comment also removes its replies. Active shots can be deleted; deleting a shared post does not by itself delete the underlying shot.</p>
        <p>You may request deletion of your account and associated personal data through Delete account in the mobile app’s account settings, or direct a deletion request to the service operator. Identity verification may be necessary to prevent someone else from deleting your account.</p>
        <p>Account deletion covers the account, profile, shots, steps, uploaded photos, posts, comments, and related social records, subject to lawful retention exceptions. It does not delete your separate Apple or Google account. Copies independently kept by other users are outside our direct control.</p>
        <p>Signing out, uninstalling the app, or revoking a device permission does not by itself delete data stored by Delusionals. Requests for erasure of particular information can also be made without closing the entire account.</p>
      </> },
      { id: 'rights', title: 'Your privacy rights', content: <>
        <p>Where GDPR applies, you may request access, correction, erasure, restriction, and, in applicable cases, a portable copy of your data or object to processing based on legitimate interests. Consent can be withdrawn without changing the lawfulness of earlier processing.</p>
        <p>You can complain to the competent data protection authority, including the authority where you live or work. Rights have legal conditions and exceptions. Requests generally require a response within one month; any permitted extension or refusal must be explained. Verification should be proportionate to the request.</p>
        <p>Direct privacy requests to the Delusionals service operator. Include your username, the account or information involved, and the right you wish to exercise. Never send your Apple or Google password or a session token. The absence of an automated tool does not remove your statutory rights.</p>
      </> },
      { id: 'children', title: 'Age and sensitive information', content: <>
        <p>Using the apps requires meeting the eligibility requirements in the <Link href="/terms#eligibility">Terms of Service</Link> and any applicable age or parental-authorization requirements. The app does not ask for a date of birth as part of the profile described here.</p>
        <p>Do not publish another person’s sensitive information without a valid basis. If a privacy concern involves a child or information that should not have been shared, identify the relevant account or content when contacting the service operator.</p>
      </> },
      { id: 'website', title: 'Visiting this website', content: <>
        <p>This is an informational and promotional website. It does not offer app registration, sign-in, shot creation, comments, or access to your mobile account. It has no mailing-list or contact-submission forms.</p>
        <p>Your browser requests pages, fonts, and images. The hosting service may process connection information such as IP addresses, request times, browser details, and errors to deliver and protect the site. This is separate from the personal content you store in the mobile apps.</p>
        <p>Website fonts and images are served with the site. The website does not add analytics, advertising trackers, or application-level cookies or browser storage. The <Link href="/cookies">Cookie Policy</Link> explains this distinction and the storage used by the mobile apps.</p>
      </> },
      { id: 'changes', title: 'Changes and related information', content: <>
        <p>This page’s date identifies its latest revision. Material changes to purposes or practices require an updated notice and any additional information or consent required by law. A website visit or acceptance of app terms is not blanket consent to new processing.</p>
        <p>See the <Link href="/terms">Terms of Service</Link> for use of the mobile service and the <Link href="/cookies">Cookie Policy</Link> for website and device storage.</p>
      </> },
    ]}
  />;
}
