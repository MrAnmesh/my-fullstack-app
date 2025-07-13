import React from "react";

const ticketSections = [
  {
    title: "Account Opening",
    iconClass: "fa fa-plus-circle",
    topics: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account",
      "Opening",
      "NRI Account Opening",
      "Charges at TradX",
      "TradX IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Funds",
    iconClass: "fa fa-credit-card",
    topics: [
      "Adding Funds",
      "Fund Withdrawal",
      "eMandates",
      "Adding Bank Accounts",
    ],
  },
  {
    title: "Core",
    iconClass: "fa fa-desktop",
    topics: [
      "Reports",
      "Ledger",
      "Portfolio",
      "60 Day Challenge",
      "IPO",
      "Referral Program",
    ],
  },
  {
    title: "Pebble",
    iconClass: "fa fa-circle-o",
    topics: [
      "Understanding Mutual Funds",
      "About Pebble",
      "Buying and Selling through Pebble",
      "Starting an SIP",
      "Managing your Portfolio",
      "Pebble App",
      "Moving to Pebble",
      "Government Securities",
    ],
  },
  {
    title: "Your TradX Account",
    iconClass: "fa fa-user",
    topics: [
      "Login Credentials",
      "Account Modification and Segment Addition",
      "DP ID and bank details",
      "Your Profile",
      "Transfer and conversion of shares",
    ],
  },
  {
    title: "Trading",
    iconClass: "fa fa-line-chart",
    topics: [
      "Margin/leverage, Product and Order types",
      "Mint Web and Mobile",
      "Trading FAQs",
      "Corporate Actions",
      "Sentinel",
      "Mint API",
      "Pi and other platforms",
      "Stockreports+",
      "GTT",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container mt-5">
      <h1 className="fs-2 mb-5">To create a ticket, select a relevant topic</h1>
      <div className="row">
        {ticketSections.map((section, index) => (
          <div className="col-md-4 mb-5" key={index}>
            <h5 className="mb-3">
              <i className={`${section.iconClass} me-2`} aria-hidden="true"></i>
              {section.title}
            </h5>
            <ul className="list-unstyled">
              {section.topics.map((topic, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-decoration-none text-primary d-block mb-2"
                  >
                    {topic}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
