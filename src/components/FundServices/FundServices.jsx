import './FundServices.css';
import Fund from './Fund';
import { useAllFundServices } from '../../services/usePersistedQueries';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

const FundServices = () => {
    const { data, errorMessage } = useAllFundServices();

    if (errorMessage) return <ErrorMessage message={errorMessage} />;

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