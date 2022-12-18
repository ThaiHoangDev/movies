import { useCallback, useEffect, useState } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';

interface IProps {
  category: string;
  onSearch: (key: string) => void;
}

export const MovieSearch = (props: IProps) => {
  const { onSearch } = props;

  const [keySearch, setKeyword] = useState('');

  const goToSearch = useCallback(() => {
    onSearch(keySearch);
  }, [onSearch, keySearch]);

  useEffect(() => {
    const enterEvent = (e: any) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener('keyup', enterEvent);
    return () => {
      document.removeEventListener('keyup', enterEvent);
    };
  }, [keySearch, goToSearch]);

  return (
    <div className='movie-search'>
      <Input
        type='text'
        placeholder='Enter keyword'
        value={keySearch}
        onChange={(e: any) => setKeyword(e.target.value)}
      />
      <Button className='small' onClick={goToSearch}>
        Search
      </Button>
    </div>
  );
};
