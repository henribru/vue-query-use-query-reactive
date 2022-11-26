import { reactive } from 'vue'

import { useQuery } from 'vue-query';
import { useQuery as useQueryNew } from '@tanstack/vue-query';

function foo() {
    return Promise.resolve("foo")
}

const query = reactive(useQuery(["foo"], foo));
query.data
if (query.isSuccess) {


    query.data
}

const queryNew = reactive(useQueryNew(["foo"], foo));
queryNew.data
if (queryNew.isSuccess) {

    
    queryNew.data
}