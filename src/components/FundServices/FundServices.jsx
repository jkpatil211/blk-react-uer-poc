import './FundServices.css';
import Fund from './Fund';
import { useAllFundServices } from '../../services/usePersistedQueries';
import Loading from '../Loading';

const FundServices = () => {
    const { data, error } = useAllFundServices();
    if (error) return;

    if (!data) return <Loading />

    return (
        <>
            <div className="tiles-block">
                <div className="tiles row">
                    {data.map(service => (
                        <Fund key={service.headline} {...service} />
                    ))}
                </div>
            </div>
        </>
        
    );
};

export default FundServices;