import { Button, Box, InputGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { AxiosResponse } from 'axios';

interface fetchProjectsProps {
  pageParam?: string;
}

interface getNextPageParamProps {
  after?: string | null;
}


async function fetchProjects({ pageParam = null }: fetchProjectsProps) {
  try {
    const response = await api.get('api/images', { params: { after: pageParam } });
    return response.data;
  } catch (err) {
    throw err;
  }

}

function getNextPageParam({ after }: getNextPageParamProps) {
  if (after) {
    return after;
  } else {
    return null;
  }
}


export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    // TODO AXIOS REQUEST WITH PARAM
    fetchProjects, {
    getNextPageParam: (pageParam) => getNextPageParam(pageParam)
  });

  const formattedData = useMemo(() => {
    let res = data?.pages.map(page => page.data);
    let resData = res ? res.flat() : [];

    return resData



    // TODO FORMAT AND FLAT DATA ARRAY
  }, [data]);


  // TODO RENDER LOADING SCREEN

  // TODO RENDER ERROR SCREEN

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>

        {isError ? <Error /> :
          isLoading ? <Loading />
            :
            <CardList cards={formattedData} />
          //TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */

        }
        {hasNextPage &&
          <Button
            mt='8'
            onClick={() =>
              fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}>
            {isFetchingNextPage
              ?
              'Carregando...'
              :
              'Carregar mais'}
          </Button>}
      </Box>
    </>
  );
}
