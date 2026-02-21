
'use server';
import {getAllPosts, getSanityBaseUrl} from "@/services/sanity/sanity.queries";
import {requestClient} from "@/services/fetchClient";



const loadPosts = async (query:string) => await requestClient(getSanityBaseUrl(), {query});


export const loadLatestPosts = async (category: string | undefined , pageNumber = 1, sortDirection = 'desc') => {
  const pageSize = 6;
  const start = (pageNumber - 1) * pageSize;
  const end = start + pageSize;
  const query = getAllPosts({start, end, sortDirection, category});
  return await loadPosts(query);
}



