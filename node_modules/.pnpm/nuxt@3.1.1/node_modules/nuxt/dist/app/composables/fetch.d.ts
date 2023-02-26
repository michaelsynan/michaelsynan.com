import type { FetchError } from 'ofetch';
import type { TypedInternalResponse, NitroFetchOptions, NitroFetchRequest } from 'nitropack';
import type { Ref } from 'vue';
import type { AsyncDataOptions, _Transform, KeyOfRes, AsyncData, PickFrom } from './asyncData';
export type FetchResult<ReqT extends NitroFetchRequest> = TypedInternalResponse<ReqT, unknown>;
type ComputedOptions<T extends Record<string, any>> = {
    [K in keyof T]: T[K] extends Function ? T[K] : T[K] extends Record<string, any> ? ComputedOptions<T[K]> | Ref<T[K]> | T[K] : Ref<T[K]> | T[K];
};
type ComputedFetchOptions<R extends NitroFetchRequest> = ComputedOptions<NitroFetchOptions<R>>;
export interface UseFetchOptions<DataT, Transform extends _Transform<DataT, any> = _Transform<DataT, DataT>, PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>, R extends NitroFetchRequest = string & {}> extends AsyncDataOptions<DataT, Transform, PickKeys>, ComputedFetchOptions<R> {
    key?: string;
}
export declare function useFetch<ResT = void, ErrorT = FetchError, ReqT extends NitroFetchRequest = NitroFetchRequest, _ResT = ResT extends void ? FetchResult<ReqT> : ResT, Transform extends (res: _ResT) => any = (res: _ResT) => _ResT, PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>>(request: Ref<ReqT> | ReqT | (() => ReqT), opts?: UseFetchOptions<_ResT, Transform, PickKeys, ReqT>): AsyncData<PickFrom<ReturnType<Transform>, PickKeys>, ErrorT | null>;
export declare function useLazyFetch<ResT = void, ErrorT = FetchError, ReqT extends NitroFetchRequest = NitroFetchRequest, _ResT = ResT extends void ? FetchResult<ReqT> : ResT, Transform extends (res: _ResT) => any = (res: _ResT) => _ResT, PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>>(request: Ref<ReqT> | ReqT | (() => ReqT), opts?: Omit<UseFetchOptions<_ResT, Transform, PickKeys>, 'lazy'>): AsyncData<PickFrom<ReturnType<Transform>, PickKeys>, ErrorT | null>;
export {};
