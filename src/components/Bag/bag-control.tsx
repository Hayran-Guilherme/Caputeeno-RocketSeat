import { BagIcon } from './../icons/bag-icon';
import { BagCount, Container } from './style'
import { useLocalStorage } from '@/hooks/useLocalStorage';

export function BagControl(){
    const { value } = useLocalStorage('bag-items');
    return(
        <Container>
            <BagIcon/>
            {value.length && <BagCount>{value.length}</BagCount>}
        </Container>
    )
}