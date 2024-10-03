import './FundServices.css';
import Fund from './Fund';

const FundServices = () => {
    const fundServicesData = [
        {
            name: 'Equities',
            tagline: 'Buying shares for the long term',
            description: 'When you invest in an equity, you buy a share in a company and become a shareholder. Equities are typically best for long-term investing – for those who are able to ride out the highs and lows of the market in search of higher rewards.',
            buttonText: 'Learn more about equities'
        },
        {
            name: 'Fixed income',
            tagline: 'Seeking stable, lower risk returns',
            description: "Fixed income securities, or bonds, are issued by companies and governments as a way of raising money. They’re basically an ‘I.O.U’ – designed to provide a regular stream of income (which is normally a fixed amount) over a specified period of time.",
            buttonText: 'Learn more about Income funds'
        },
        {
            name: 'Alternatives',
            tagline: 'Driven by diverse sources of returns',
            description: "While traditional assets like stocks and bonds are traded on the public markets, alternative investment strategies such as real estate, infrastructure, and private credit are less sensitive to the movements of global markets.",
            buttonText: 'Learn more about alternatives'
        },
        {
            name: 'Cash',
            tagline: 'Bank accounts aren’t the only option',
            description: "If you're looking for better rates of return on deposits than you’d get in an ordinary bank account, cash funds may be a great option. They often invest in very short-term bonds known as ‘money market instruments’, which are essentially banks lending money to each other.",
            buttonText: 'See all cash funds'
        },
        {
            name: 'Indexing',
            tagline: 'Investing that works for everyone',
            description: "Fifty years of indexing have proven investing doesn’t need to be expensive, or complex. There’s quite literally an index fund for every market exposure and investment strategy you could possibly need, which means more opportunities for more investors.",
            buttonText: 'Learn more about indexing'
        },
        {
            name: 'Multi-Asset',
            tagline: 'Diversifying your portfolio',
            description: "A multi-asset strategy combines different types of assets – stocks, bonds, real estate, or cash for example – to create a more nimble and broadly diversified portfolio. Fund managers will balance asset classes to achieve particular investment objectives.",
            buttonText: 'Learn more about Multi-Asset'
        }
    ];
    return (
        <>
            <div className="tiles-block">
                <div className="tiles row">
                    {fundServicesData.map(service => <Fund key={service.name} {...service} />)}
                </div>
            </div>
        </>
        
    );
};

export default FundServices;