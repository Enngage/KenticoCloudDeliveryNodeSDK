import {
    DeliveryClientConfig,
    IContentItem,
    IDeliveryClient,
    MultipleTypeQuery,
    SingleTypeQuery,
    MultipleItemQuery,
    SingleItemQuery,
    TaxonomyQuery,
    TaxonomiesQuery,
    ElementQuery,
    QueryService
} from 'kentico-cloud-delivery-typescript-sdk';
import { HttpNodeJsService } from '../services/http-nodejs.service';
import { packageId, repoHost, version } from '../library-version';

export class DeliveryNodeClient implements IDeliveryClient {

    private queryService: QueryService;

    /**
    * Delivery client for Node environment
    * @constructor
    * @param {DeliveryClientConfig} config - The client configuration
    */
    constructor(
        protected config: DeliveryClientConfig,
    ) {
        this.queryService = new QueryService(config, new HttpNodeJsService(), {
            host: repoHost,
            name: packageId,
            version: version
        });
    }

    /**
    * Gets query for multiple types
    */
    types(): MultipleTypeQuery {
        return new MultipleTypeQuery(this.config, this.queryService);
    }

    /**
    * Gets query for single type
    * @param {string} typeCodename - Codename of the type to fetch
    */
    type(typeCodename: string): SingleTypeQuery {
        return new SingleTypeQuery(this.config, this.queryService, typeCodename);
    }


    /**
    * Gets query for multiple items
    */
    items<TItem extends IContentItem>(): MultipleItemQuery<TItem> {
        return new MultipleItemQuery<TItem>(this.config, this.queryService);
    }

    /**
    * Gets query for single item
    * @param {string} codename - Codename of item to fetch
    */
    item<TItem extends IContentItem>(codename: string): SingleItemQuery<TItem> {
        return new SingleItemQuery<TItem>(this.config, this.queryService, codename);
    }

    /**
    * Gets query for single taxonomy
    * @param {string} codename - Codename of taxonomy to fetch
    */
    taxonomy<TItem extends IContentItem>(codename: string): TaxonomyQuery {
        return new TaxonomyQuery(this.config, this.queryService, codename);
    }

    /**
    * Gets query for multiple taxonomies
    */
    taxonomies<TItem extends IContentItem>(): TaxonomiesQuery {
        return new TaxonomiesQuery(this.config, this.queryService);
    }

    /**
     * Gets query for an element within a type
     * @param {string} typeCodename - Codename of the type
     * @param {string} elementCodename - Codename of the element
     */
    element(typeCodename: string, elementCodename: string): ElementQuery {
        return new ElementQuery(this.config, this.queryService, typeCodename, elementCodename);
    }
}
