import { Row, Col } from 'react-bootstrap';
import './Sitemap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { useState } from 'react';

const Sitemap = () => {
    const [isShowMore, setIsShowMore] = useState(false)
    return (
        <Row className="sitemap">
            <Col lg={11} sm={11} xs={11} className="mx-auto">
                <div className="sitemap blackrock combined-with-nav" id="vi20-sitemap-combined" style={{minHeight: '500px'}}>
                    <div className="multibrand-sitemap__wrapper wrapper-980">
                        <div className="multibrand-sitemap__row row">
                            <div className="multibrand-sitemap__column col-6">
                                <div className="sitemap__column__header">
                                    <span>About us</span>
                                </div>
                                <ul className="multibrand-sitemap__column__l2-l3-container row">
                                    <li className="col-6 l2-l3-item-container">
                                        <ul className="l3-item-container">
                                            <li>
                                                <a href="/uk/about-us/who-we-are" data-id="Who we are" data-link-event="About us:Who we are" className="l3-item clickable-item">Who we are</a> </li>
                                            <li>
                                                <a href="/uk/about-us/about-blackrock/what-we-do" data-id="What we do" data-link-event="About us:What we do" className="l3-item clickable-item">What we do</a> </li>
                                            <li>
                                                <a href="/uk/about-us/investment-stewardship" data-id="Investment stewardship" data-link-event="About us:Investment stewardship" target="_top" className="l3-item clickable-item">Investment stewardship</a> </li>
                                            <li>
                                                <a href="https://www.ishares.com/uk/individual/en/education/about-ishares" data-id="About iShares" data-link-event="About us:About iShares" target="_blank" className="l3-item clickable-item">About iShares</a> </li>
                                        </ul>
                                    </li>
                                    <li className="col-6 l2-l3-item-container">
                                        <ul className="l3-item-container">
                                            <li>
                                                <a href="https://www.blackrock.com/corporate" data-link-event="resource-link:Our company" target="_blank" className="l3-item clickable-item"> Our company
                                                </a> </li>
                                            <li>
                                                <a href="https://careers.blackrock.com/" data-link-event="resource-link:Careers" target="_blank" className="l3-item clickable-item"> Careers
                                                </a> </li>
                                            <li>
                                                <a href="/uk/contact-us" data-link-event="resource-link:Contact us" target="_self" className="l3-item clickable-item"> Contact us
                                                </a> </li>
                                        </ul>
                                    </li>
                                </ul></div>
                            <div className="multibrand-sitemap__column col-6">
                                <div className="sitemap__column__header">
                                    <span>Funds</span>
                                </div>
                                <ul className="multibrand-sitemap__column__l2-l3-container row">
                                    <li className="l2-l3-item-container col-6">
                                        <div className="l2-header">All Investors</div>
                                        <ul className="l3-item-container " aria-label="All Investors">
                                            <li className="">
                                                <a href="/uk/products/product-list#/?productView=all&amp;fsac=43535|43580|43581|43584|43585|43615" data-id="Equity" data-link-event="Funds:Equity" target="_top" className="l3-item clickable-item">Equity</a> </li>
                                            <li className="">
                                                <a href="/uk/products/product-list#/?productView=all&amp;fsac=43552|43556|43569|43586|43589|43625|43768|43777|43779" data-id="Multi-Asset" data-link-event="Funds:Multi-Asset" target="_top" className="l3-item clickable-item">Multi-Asset</a> </li>
                                            <li className="">
                                                <a href="/uk/products/product-list#/?productView=all&amp;fsac=43549|43563|43566|43573|43588|43774|43775|60556" data-id="Fixed income" data-link-event="Funds:Fixed income" target="_top" className="l3-item clickable-item">Fixed income</a> </li>
                                            <li className="">
                                                <a href="/uk/products/product-list#/?productView=all&amp;fsac=43587|43597|43608" data-id="Commodity" data-link-event="Funds:Commodity" target="_top" className="l3-item clickable-item">Commodity</a> </li>
                                            <li className="">
                                                <a href="/uk/products/product-list#/?productView=all&amp;fsac=43542" data-id="Cash" data-link-event="Funds:Cash" target="_top" className="l3-item clickable-item">Cash</a> </li>
                                            <li className="">
                                                <a href="/uk/products/product-list#/?productView=all&amp;fsac=43776|OTHR43530" data-id="Real estate" data-link-event="Funds:Real estate" target="_top" className="l3-item clickable-item">Real estate</a> </li>
                                            <li className="">
                                                <a href="/uk/solutions/charities" data-id="Charities" data-link-event="Funds:Charities" className="l3-item clickable-item">Charities</a> </li>
                                            <li className="bottom-links">
                                                <a href="/uk/products/product-list" data-link-event="resource-link:View all funds" target="_self" className="clickable-item">
                                                    <span className="label">View all funds</span>
                                                    <FontAwesomeIcon icon={faAngleRight} className="viewAllIcon" />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="l2-l3-item-container col-6">
                                        <div className="l2-header">Professionals</div>
                                        <ul className="l3-item-container " aria-label="Professionals">
                                            <li className="">
                                                <a href="/uk/professionals/products/product-list?userType=intermediaries#/?productView=all&amp;fsac=43535|43580|43581|43584|43585|43615" data-id="Equity" data-link-event="Funds:Equity" className="l3-item clickable-item">Equity</a> </li>
                                            <li className="">
                                                <a href="/uk/professionals/products/product-list?userType=intermediaries#/?productView=all&amp;fsac=43549|43563|43566|43573|43588|43774|43775|60556|61384|43567" data-id="Fixed income" data-link-event="Funds:Fixed income" className="l3-item clickable-item">Fixed income</a> </li>
                                            <li className="">
                                                <a href="/uk/professionals/products/product-list?userType=intermediaries#/?productView=all&amp;fsac=43552|43556|43569|43586|43589|43625|43768|43777|43779" data-id="Multi-Asset" data-link-event="Funds:Multi-Asset" className="l3-item clickable-item">Multi-Asset</a> </li>
                                            <li className="">
                                                <a href="/uk/professionals/products/product-list?userType=intermediaries#/?productView=all&amp;fsac=43587|43597|43608" data-id="Commodity" data-link-event="Funds:Commodity" className="l3-item clickable-item">Commodity</a> </li>
                                            <li className="">
                                                <a href="/uk/professionals/products/product-list?userType=intermediaries#/?productView=all&amp;fsac=43542" data-id="Cash" data-link-event="Funds:Cash" className="l3-item clickable-item">Cash</a> </li>
                                            <li className="">
                                                <a href="/uk/professionals/products/product-list?userType=intermediaries#/?productView=all&amp;fsac=43776|OTHR43530" data-id="Real Estate" data-link-event="Funds:Real Estate" className="l3-item clickable-item">Real Estate</a> </li>
                                            <li className="bottom-links">
                                                <a href="/uk/professionals/products/product-list?userType=intermediaries" data-link-event="resource-link:View all funds" target="_self" className="clickable-item">
                                                    <span className="label">View all funds</span>
                                                    <FontAwesomeIcon icon={faAngleRight} className="viewAllIcon" />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="multibrand-sitemap__column col-12">
                                <div className="sitemap__column__header">
                                    <span>Solutions</span>
                                </div>
                                { isShowMore && (
                                    <ul className="multibrand-sitemap__column__l2-l3-container row">
                                        <li className="l2-l3-item-container col-6">
                                            <div className="l2-header">All investors</div>
                                            <ul className="l3-item-container row" aria-label="All investors">
                                                <li className="col-4">
                                                    <div className="l3-header">Asset classes </div>
                                                    <ul className="l4-item-container" aria-label="Asset classes ">
                                                        <li><a href="/uk/solutions/alternative-investments" data-id="Alternative investments" data-link-event="Solutions:All investors:Asset classes :Alternative investments" className="l4-item clickable-item">
                                                            Alternative investments </a></li>
                                                        <li><a href="/uk/solutions/fundamental-equities" data-id="Fundamental Equities" data-link-event="Solutions:All investors:Asset classes :Fundamental Equities" className="l4-item clickable-item">
                                                            Fundamental Equities </a></li>
                                                        <li><a href="https://www.blackrock.com/uk/solutions/investment-trusts/our-range" data-id="Investment trusts" data-link-event="Solutions:All investors:Asset classes :Investment trusts" className="l4-item clickable-item">
                                                            Investment trusts </a></li>
                                                        <li><a href="/uk/solutions/multi-asset" data-id="Multi-Asset" data-link-event="Solutions:All investors:Asset classes :Multi-Asset" className="l4-item clickable-item">
                                                            Multi-Asset </a></li>
                                                        <li><a href="/uk/solutions/systematic-investing" data-id="Systematic Investing" data-link-event="Solutions:All investors:Asset classes :Systematic Investing" className="l4-item clickable-item">
                                                            Systematic Investing </a></li>
                                                    </ul>
                                                </li>
                                                <li className="col-4">
                                                    <div className="l3-header">Clients</div>
                                                    <ul className="l4-item-container" aria-label="Clients">
                                                        <li><a href="/uk/solutions/charities" data-id="Charities" data-link-event="Solutions:All investors:Clients:Charities" className="l4-item clickable-item">
                                                            Charities </a></li>
                                                        <li><a href="/uk/solutions/investment-trusts/our-range" data-id="Investment Trust" data-link-event="Solutions:All investors:Clients:Investment Trust" className="l4-item clickable-item">
                                                            Investment Trust </a></li>
                                                    </ul>
                                                </li>
                                                <li className="col-4">
                                                    <div className="l3-header">Insights</div>
                                                    <ul className="l4-item-container" aria-label="Insights">
                                                        <li><a href="/uk/solutions/insights/investment-education" data-id="Investment Education " data-link-event="Solutions:All investors:Insights:Investment Education " className="l4-item clickable-item">
                                                            Investment Education </a></li>
                                                        <li><a href="/uk/solutions/insights" data-id="Market insights" data-link-event="Solutions:All investors:Insights:Market insights" className="l4-item clickable-item">
                                                            Market insights </a></li>
                                                        <li><a href="https://www.blackrock.com/corporate/newsroom" data-id="Newsroom" data-link-event="Solutions:All investors:Insights:Newsroom" className="l4-item clickable-item">
                                                            Newsroom </a></li>
                                                        <li><a href="https://www.blackrock.com/corporate/insights/public-policy/viewpoints-letters-consultations" data-id="Public policy" data-link-event="Solutions:All investors:Insights:Public policy" className="l4-item clickable-item">
                                                            Public policy </a></li>
                                                        <li><a href="/uk/solutions/stock-market-quarterly-outlook" data-id="Stock Market Monitor" data-link-event="Solutions:All investors:Insights:Stock Market Monitor" className="l4-item clickable-item">
                                                            Stock Market Monitor </a></li>
                                                        <li><a href="/uk/solutions/podcasts/the-bid" data-id="The Bid Podcast" data-link-event="Solutions:All investors:Insights:The Bid Podcast" className="l4-item clickable-item">
                                                            The Bid Podcast </a></li>
                                                    </ul>
                                                </li>
                                                <li className="col-4">
                                                    <div className="l3-header">Investment themes</div>
                                                    <ul className="l4-item-container" aria-label="Investment themes">
                                                        <li><a href="/uk/solutions/mymap" data-id="MyMap range" data-link-event="Solutions:All investors:Investment themes:MyMap range" className="l4-item clickable-item">
                                                            MyMap range </a></li>
                                                        <li><a href="/uk/solutions/portfolio-etfs" data-id="Portfolio ETFs" data-link-event="Solutions:All investors:Investment themes:Portfolio ETFs" className="l4-item clickable-item">
                                                            Portfolio ETFs </a></li>
                                                        <li><a href="/uk/solutions/retirement" data-id="Retirement" data-link-event="Solutions:All investors:Investment themes:Retirement" className="l4-item clickable-item">
                                                            Retirement </a></li>
                                                        <li><a href="/uk/solutions/sustainable-and-transition-investing" data-id="Sustainable and transition investing" data-link-event="Solutions:All investors:Investment themes:Sustainable and transition investing" className="l4-item clickable-item">
                                                            Sustainable and transition investing </a></li>
                                                        <li><a href="/uk/solutions/thematic-investing" data-id="Thematic investing" data-link-event="Solutions:All investors:Investment themes:Thematic investing" className="l4-item clickable-item">
                                                            Thematic investing </a></li>
                                                    </ul>
                                                </li>
                                                <li className="col-4">
                                                    <div className="l3-header">Resources</div>
                                                    <ul className="l4-item-container" aria-label="Resources">
                                                        <li><a href="/uk/solutions/how-to-invest" data-id="How to invest" data-link-event="Solutions:All investors:Resources:How to invest" className="l4-item clickable-item">
                                                            How to invest </a></li>
                                                        <li><a href="/uk/solutions/jargon-buster" data-id="Jargon buster" data-link-event="Solutions:All investors:Resources:Jargon buster" className="l4-item clickable-item">
                                                            Jargon buster </a></li>
                                                        <li><a href="/uk/solutions/library/gls-library-uk" data-id="Literature" data-link-event="Solutions:All investors:Resources:Literature" className="l4-item clickable-item">
                                                            Literature </a></li>
                                                        <li><a href="/uk/solutions/sustainability-disclosures" data-id="Sustainability Disclosure" data-link-event="Solutions:All investors:Resources:Sustainability Disclosure" className="l4-item clickable-item">
                                                            Sustainability Disclosure </a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="l2-l3-item-container col-6">
                                            <div className="l2-header">Professionals</div>
                                            <ul className="l3-item-container row" aria-label="Professionals">
                                                <li className="col-4">
                                                    <div className="l3-header">Capabilities</div>
                                                    <ul className="l4-item-container" aria-label="Capabilities">
                                                        <li><a href="/uk/professionals/solutions/active-equities?userType=intermediaries" data-id="Active equities" data-link-event="Solutions:Professionals:Capabilities:Active equities" className="l4-item clickable-item">
                                                            Active equities </a></li>
                                                        <li><a href="/uk/professionals/solutions/alternatives?userType=intermediaries" data-id="Alternatives" data-link-event="Solutions:Professionals:Capabilities:Alternatives" className="l4-item clickable-item">
                                                            Alternatives </a></li>
                                                        <li><a href="/uk/professionals/solutions/cash-management?userType=intermediaries" data-id="Cash Management" data-link-event="Solutions:Professionals:Capabilities:Cash Management" className="l4-item clickable-item">
                                                            Cash Management </a></li>
                                                        <li><a href="/uk/professionals/solutions/fixed-income?userType=intermediaries" data-id="Fixed Income" data-link-event="Solutions:Professionals:Capabilities:Fixed Income" className="l4-item clickable-item">
                                                            Fixed Income </a></li>
                                                        <li><a href="/uk/sustainable-and-transition-investing/investment-platform" data-id="Sustainable and Transition Investing" data-link-event="Solutions:Professionals:Capabilities:Sustainable and Transition Investing" className="l4-item clickable-item">
                                                            Sustainable and Transition Investing </a></li>
                                                        <li><a href="/uk/professionals/solutions/multi-asset-strategies-solutions" data-id="Multi-Asset" data-link-event="Solutions:Professionals:Capabilities:Multi-Asset" className="l4-item clickable-item">
                                                            Multi-Asset </a></li>
                                                        <li><a href="/uk/professionals/solutions/systematic-investing" data-id="Systematic investing" data-link-event="Solutions:Professionals:Capabilities:Systematic investing" className="l4-item clickable-item">
                                                            Systematic investing </a></li>
                                                    </ul>
                                                </li>
                                                <li className="col-4">
                                                    <div className="l3-header">Clients</div>
                                                    <ul className="l4-item-container" aria-label="Clients">
                                                        <li><a href="/uk/professionals/solutions/our-clients/family-offices-and-foundations?userType=intermediaries" data-id="Family offices" data-link-event="Solutions:Professionals:Clients:Family offices" className="l4-item clickable-item">
                                                            Family offices </a></li>
                                                        <li><a href="/uk/professionals/institutional-investors?userType=intermediaries" data-id="Institutional investor" data-link-event="Solutions:Professionals:Clients:Institutional investor" className="l4-item clickable-item">
                                                            Institutional investor </a></li>
                                                        <li><a href="/uk/professionals/solutions/wealth-managers?userType=intermediaries" data-id="Wealth managers" data-link-event="Solutions:Professionals:Clients:Wealth managers" className="l4-item clickable-item">
                                                            Wealth managers </a></li>
                                                    </ul>
                                                </li>
                                                <li className="col-4">
                                                    <div className="l3-header">Insights</div>
                                                    <ul className="l4-item-container" aria-label="Insights">
                                                        <li><a href="https://www.blackrock.com/corporate/insights/blackrock-investment-institute" data-id="BlackRock Investment Institute" data-link-event="Solutions:Professionals:Insights:BlackRock Investment Institute" target="_blank" className="l4-item clickable-item">
                                                            BlackRock Investment Institute </a></li>
                                                        <li><a href="/uk?userType=intermediaries" data-id="Media hub" data-link-event="Solutions:Professionals:Insights:Media hub" className="l4-item clickable-item unlocked">
                                                            Media hub </a></li>
                                                        <li><a href="/uk/professionals/solutions/blackrock-investment-institute/publications/outlook" data-id="Quarterly investment themes" data-link-event="Solutions:Professionals:Insights:Quarterly investment themes" className="l4-item clickable-item">
                                                            Quarterly investment themes </a></li>
                                                        <li><a href="/uk/professionals/solutions/insights/events" data-id="Events Hub" data-link-event="Solutions:Professionals:Insights:Events Hub" className="l4-item clickable-item">
                                                            Events Hub </a></li>
                                                        <li><a href="/uk/professionals/insights-series/equities" data-id="Equity insights" data-link-event="Solutions:Professionals:Insights:Equity insights" className="l4-item clickable-item">
                                                            Equity insights </a></li>
                                                        <li><a href="/uk/professionals/insights-series/fixed-income" data-id="Fixed income insights" data-link-event="Solutions:Professionals:Insights:Fixed income insights" className="l4-item clickable-item">
                                                            Fixed income insights </a></li>
                                                        <li><a href="/uk/professionals/insights-series/portfolio-construction" data-id="Portfolio construction insights" data-link-event="Solutions:Professionals:Insights:Portfolio construction insights" className="l4-item clickable-item">
                                                            Portfolio construction insights </a></li>
                                                        <li><a href="/uk/professionals/insights-series/private-markets" data-id="Private markets insights" data-link-event="Solutions:Professionals:Insights:Private markets insights" className="l4-item clickable-item">
                                                            Private markets insights </a></li>
                                                        <li className="bottom-links">
                                                            <a href="/uk/professionals/solutions/insights" data-link-event="resource-link:View all insights" target="_self" className="clickable-item">
                                                                <span className="label">View all insights</span>
                                                                <FontAwesomeIcon icon={faAngleRight} className="viewAllIcon" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="col-4">
                                                    <div className="l3-header">Investment spotlight</div>
                                                    <ul className="l4-item-container" aria-label="Investment spotlight">
                                                        <li><a href="/uk/professionals/solutions/its-a-fixed-income-era" data-id="It's a Fixed Income Era" data-link-event="Solutions:Professionals:Investment spotlight:It's a Fixed Income Era" className="l4-item clickable-item">
                                                            It's a Fixed Income Era </a></li>
                                                        <li><a href="/uk/professionals/solutions/mymap" data-id="MyMap range" data-link-event="Solutions:Professionals:Investment spotlight:MyMap range" className="l4-item clickable-item">
                                                            MyMap range </a></li>
                                                        <li><a href="/uk/professionals/solutions/thematic-investing" data-id="Thematic investing" data-link-event="Solutions:Professionals:Investment spotlight:Thematic investing" className="l4-item clickable-item">
                                                            Thematic investing </a></li>
                                                        <li><a href="/uk/professionals/solutions/unconstrained-investing" data-id="Unconstrained equity investing" data-link-event="Solutions:Professionals:Investment spotlight:Unconstrained equity investing" className="l4-item clickable-item">
                                                            Unconstrained equity investing </a></li>
                                                        <li><a href="/uk/professionals/solutions/dispersion-is-back" data-id="When equity markets are in flux, flex" data-link-event="Solutions:Professionals:Investment spotlight:When equity markets are in flux, flex" className="l4-item clickable-item">
                                                            When equity markets are in flux, flex </a></li>
                                                    </ul>
                                                </li>
                                                <li className="col-4">
                                                    <div className="l3-header">Resources</div>
                                                    <ul className="l4-item-container" aria-label="Resources">
                                                        <li><a href="/uk/professionals/contact-us?userType=intermediaries" data-id="Contact us" data-link-event="Solutions:Professionals:Resources:Contact us" className="l4-item clickable-item">
                                                            Contact us </a></li>
                                                        <li><a href="/uk/solutions/how-to-invest" data-id="How to invest" data-link-event="Solutions:Professionals:Resources:How to invest" className="l4-item clickable-item">
                                                            How to invest </a></li>
                                                        <li><a href="/uk/professionals/solutions/library?userType=intermediaries" data-id="Library" data-link-event="Solutions:Professionals:Resources:Library" className="l4-item clickable-item">
                                                            Library </a></li>
                                                        <li><a href="/uk/professionals/solutions/library-for-institutions" data-id="Library for institution" data-link-event="Solutions:Professionals:Resources:Library for institution" className="l4-item clickable-item">
                                                            Library for institution </a></li>
                                                        <li><a href="https://www.blackrock.com/corporate/insights/public-policy/viewpoints-letters-consultations" data-id="Public policy" data-link-event="Solutions:Professionals:Resources:Public policy" target="_blank" className="l4-item clickable-item">
                                                            Public policy </a></li>
                                                        <li><a href="/uk/professionals/solutions/adviser-resources/reporting-fund-status?userType=intermediaries" data-id="Reporting fund status" data-link-event="Solutions:Professionals:Resources:Reporting fund status" className="l4-item clickable-item">
                                                            Reporting fund status </a></li>
                                                    </ul>
                                                </li>
                                                <li className="col-4">
                                                    <div className="l3-header">Services</div>
                                                    <ul className="l4-item-container" aria-label="Services">
                                                        <li><a href="/uk/professionals/solutions/outsourced-chief-investment-officer" data-id="Outsourced Chief Investment Officer" data-link-event="Solutions:Professionals:Services:Outsourced Chief Investment Officer" className="l4-item clickable-item">
                                                            Outsourced Chief Investment Officer </a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="multibrand-sitemap__overlay always-visible visible">
                        <button className="show-more-less explore-more-btn" onClick={e => setIsShowMore(!isShowMore)}>
                            <FontAwesomeIcon icon={faAngleRight} style={{color: 'red', marginRight: '7px'}} />
                            <span className="label">{isShowMore ? 'Less' : 'More'}</span>
                        </button>
                    </div>
                </div>
            </Col>
        </Row>
    )
};

export default Sitemap;