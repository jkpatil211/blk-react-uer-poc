import { useFetchPersistedQuery } from "../../services/usePersistedQueries";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";

const ContentFragment = ({ fragmentName, path, queryModelName, component }) => {
    const { data, errorMessage } = useFetchPersistedQuery(path, queryModelName);

    if (errorMessage) return <ErrorMessage message={errorMessage} />;
    
    if (!data) return <Loading />;

    let title = data?._metadata?.stringMetadata.find(field => field.name === 'title')?.value || fragmentName;
    return (
      <div
        data-aue-resource={`urn:aemconnection:${data?._path}/jcr:content/data/master`}
        data-aue-type="reference"
        data-aue-title={title}
      >
        {component(data)}
      </div>  
    )
};

export default ContentFragment;