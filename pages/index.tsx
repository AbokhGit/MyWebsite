import { getSession} from 'next-auth/react'
import { NextPageContext } from "next"

import Navbar from '@/components/Navbar';
import BillBoard from '@/components/BillBoard';
import MovieList from '@/components/MovieList';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import InfoModal from '@/components/InfoModal';
import useInfoModal from '@/hooks/useInfoModal';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return{
      redirect:{
        destination: '/auth',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}

export default function Home() {
   const { data: movies = [] } = useMovieList();
   const { data: favorites = []} = useFavorites();
   const { isOpen, closeModal} = useInfoModal();

  return (
    <>
      <Navbar/>
      <div className='lg:px-56 px-20'>
        <InfoModal visible={isOpen} onClose={closeModal}/>
        <BillBoard/>
        <div className='pb-40'>
          <MovieList title='Tranding Now' data={movies}/>
          <MovieList title='My List' data={favorites}/>
        </div>
      </div>
    </>
  )
}
