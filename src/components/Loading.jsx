import loadingIcon from '../assets/icon-loading.svg'

export default function Loading() {
    return (
        <div className="loading">
            <img src={loadingIcon} alt='Loading...' />
        </div>
    );
}