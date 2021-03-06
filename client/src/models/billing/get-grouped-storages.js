import BaseBillingRequest from './base-billing-request';
import {costMapper} from './utils';
import GetDataWithPrevious from './get-data-with-previous';
import join from './join-periods';

export class GetGroupedStorages extends BaseBillingRequest {
  constructor (filters, pagination = null) {
    super(filters, true, pagination);
    this.grouping = 'STORAGE';
  }

  postprocess (value) {
    const payload = super.postprocess(value);
    return this.prepareStoragesData(payload);
  }

  prepareStoragesData (raw) {
    const res = {};

    (raw && raw.length ? raw : []).forEach(i => {
      let name = i.info && i.info.name ? i.info.name : i.groupingInfo.STORAGE;
      if (name && name !== 'unknown') {
        res[name] = {
          name,
          owner: i.groupingInfo.owner,
          created: i.groupingInfo.created,
          region: i.groupingInfo.region,
          provider: i.groupingInfo.provider,
          value: isNaN(i.cost) ? 0 : costMapper(i.cost),
          ...i
        };
      }
    });

    return res;
  }
}

export class GetGroupedStoragesWithPrevious extends GetDataWithPrevious {
  constructor (filters, pagination = null) {
    const {
      end,
      endStrict,
      previousEnd,
      previousEndStrict,
      ...rest
    } = filters;
    const formattedFilters = {
      end: endStrict || end,
      previousEnd: previousEndStrict || previousEnd,
      ...rest
    };
    super(
      GetGroupedStorages,
      formattedFilters,
      pagination
    );
  }

  postprocess (value) {
    const {current, previous} = super.postprocess(value);
    return join(current, previous);
  }
}
