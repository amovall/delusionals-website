import Link from 'next/link';
import { LegalPage } from '../components/legal-page';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata('/cookies');

export default function CookiesPage() {
  return <LegalPage
    title="Cookie Policy"
    intro="This policy distinguishes cookies on the Delusionals informational website from the session and device storage used by our iOS and Android mobile apps."
    sections={[
      { id: 'what-cookies-are', title: 'Cookies and similar technologies', content: <>
        <p>Cookies are small pieces of information a website can save in your browser. Local storage, session storage, and similar technologies can also retain information on a device. Their purpose matters: an authentication session and an advertising tracker are different uses.</p>
        <p>The Delusionals website provides product information and links to app stores. The mobile apps provide the account-based social service. Storage used by an app does not mean that visiting this website creates the same account or session.</p>
      </> },
      { id: 'current-use', title: 'What the website uses', content: <>
        <p>The website’s own functionality does not set application cookies, write to local storage or session storage, or install a service worker. It does not include analytics SDKs, advertising pixels, fingerprinting, or embedded social-media widgets.</p>
        <table>
          <caption className="sr-only">Storage and tracking used by the informational website</caption>
          <thead><tr><th scope="col">Technology</th><th scope="col">Website use</th></tr></thead>
          <tbody>
            <tr><td>Application cookies</td><td>None set by website features</td></tr>
            <tr><td>Local or session storage</td><td>Not used by website features</td></tr>
            <tr><td>Analytics and advertising trackers</td><td>Not integrated</td></tr>
            <tr><td>Fonts and images</td><td>Served with the website; the browser may cache public assets</td></tr>
          </tbody>
        </table>
        <p>Navigation, the mobile menu, and expandable FAQ answers work without saving a preference. Normal browser caching helps display public content and is separate from tracking an individual across services.</p>
      </> },
      { id: 'hosting', title: 'Hosting and external services', content: <>
        <p>Website delivery involves technical network requests. Hosting infrastructure may process connection and security information to deliver and protect the site. Server logs are distinct from information saved in your browser; see <Link href="/privacy#website">Visiting this website</Link> in the Privacy Policy.</p>
        <p>The website’s own code and infrastructure are separate layers. This policy does not treat a server security log as an advertising cookie, or the absence of an analytics script as proof that no technical request information is processed.</p>
        <p>Following an App Store or Google Play link opens an external service with its own privacy and cookie practices. The same applies to a provider-controlled Apple or Google sign-in window opened by the mobile app.</p>
      </> },
      { id: 'mobile-apps', title: 'Storage in the mobile apps', content: <>
        <ul>
          <li><strong>Session credentials:</strong> the iOS and Android apps use device secure storage to retain and refresh the Supabase sign-in session. This keeps your account signed in; it is not an advertising identifier.</li>
          <li><strong>Temporary content:</strong> photo selection and processing create local image files, and the apps hold retrieved content in memory to display the service efficiently.</li>
          <li><strong>Sign-in providers:</strong> Apple or Google may use their own session mechanisms in the authentication flow you choose. These are separate from cookies on the Delusionals informational website.</li>
        </ul>
        <p>The mobile apps described here do not integrate advertising or third-party analytics SDKs, read advertising identifiers, or register device push-notification tokens. Records of follows, believes, comments, and in-app notifications support the social service; they are described in the <Link href="/privacy#app-data">Privacy Policy</Link>.</p>
      </> },
      { id: 'choices', title: 'Your choices and consent', content: <>
        <p>You can inspect or remove website data and control cookies through your browser settings. The website’s content and navigation do not depend on accepting optional cookies. In the mobile apps, you can sign out and manage photo permissions through your device settings.</p>
        <p>Removing browser data, uninstalling an app, or signing out does not close your Delusionals account or erase server-side content. See <Link href="/privacy#controls">Your controls and account deletion</Link> for those requests.</p>
        <p>No optional tracking is loaded by the website described here, so there is no optional tracker to enable through a consent banner. If a use requiring consent is introduced, it must be explained and kept disabled until you choose to allow it. Where consent is used, it must be as easy to withdraw as to give.</p>
      </> },
      { id: 'changes', title: 'Changes and questions', content: <>
        <p>The date above identifies the latest revision. Changes to storage or tracking practices require an updated explanation of the technology, purpose, provider, duration, and relevant choice before the new use begins.</p>
        <p>Privacy questions can be directed to the Delusionals service operator as described in <Link href="/privacy#rights">Your privacy rights</Link>. The <Link href="/terms">Terms of Service</Link> govern use of the mobile apps.</p>
      </> },
    ]}
  />;
}
