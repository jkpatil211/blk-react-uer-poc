import loadingIcon from '../assets/icon-loading.svg'

const Loading = () => {
    return (
        <div className="loading">
            <img src={loadingIcon} alt='Loading...' />
        </div>
    );
}

export default Loading;