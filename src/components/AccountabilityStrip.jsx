/**
 * AccountabilityStrip.jsx
 * 
 * Displays key accountability and transparency information.
 * Creates immediate trust through visible registration, legal status, and financial transparency.
 * 
 * Props:
 * - registrationNumber: string (e.g., "12345678")
 * - registrationAct: string (e.g., "Societies Registration Act, 1860")
 * - registrationDate: string (e.g., "1993")
 * - annualReportUrl: string (optional)
 * - taxExemptStatus: string (optional, e.g., "80G exemption number")
 * - lastAuditYear: number (optional)
 */

export function AccountabilityStrip({
  registrationNumber,
  registrationAct = "Societies Registration Act, 1860",
  registrationDate,
  annualReportUrl,
  taxExemptStatus,
  lastAuditYear
}) {
  return (
    <section className="accountability-strip">
      <div className="shell">
        <div className="accountability-label">
          <span className="eyebrow">Legal & Financial Transparency</span>
        </div>
        
        <div className="accountability-items">
          {/* Registration */}
          <div className="accountability-item">
            <h4>Legal Registration</h4>
            <p>
              <strong>Registered under {registrationAct}</strong>
              {registrationNumber && <br />}
              {registrationNumber && <>Registration No: <code>{registrationNumber}</code></>}
              {registrationDate && <br />}
              {registrationDate && <>Since {registrationDate}</>}
            </p>
          </div>
          
          {/* Tax Status */}
          {taxExemptStatus && (
            <div className="accountability-item">
              <h4>Tax Exemption</h4>
              <p><strong>{taxExemptStatus}</strong></p>
            </div>
          )}
          
          {/* Audit */}
          {lastAuditYear && (
            <div className="accountability-item">
              <h4>Annual Audit</h4>
              <p>Latest audit completed: <strong>{lastAuditYear}</strong></p>
            </div>
          )}
          
          {/* Annual Report Link */}
          {annualReportUrl && (
            <div className="accountability-item">
              <h4>Financial Reports</h4>
              <p>
                <a href={annualReportUrl} className="text-link">
                  View Annual Report (opens new tab) →
                </a>
              </p>
            </div>
          )}
        </div>
        
        <p className="accountability-footer">
          We are committed to transparency and accountability in all our operations.
          Questions? <a href="/contact" className="text-link">Contact us</a>.
        </p>
      </div>
    </section>
  );
}

export default AccountabilityStrip;
