import { Button, IconButton } from '../../../core/src';
import { BiSearch } from 'react-icons/bi';

export default function App() {
    return (
        <div className='max-w-[600px] m-4'>
            <Button className='mt-2' size='xs' leadingVisual={<BiSearch size={"1.1em"} color="#000000" />}>Search</Button>
            <Button className='mt-2' size='sm' leadingVisual={<BiSearch size={"1.1em"} color="#000000" />}>Search</Button>
            <Button className='mt-2' size='md' leadingVisual={<BiSearch size={"1.1em"} color="#000000" />}>Search</Button>
            <Button className='mt-2' size='lg' leadingVisual={<BiSearch size={"1.1em"} color="#000000" />}>Search</Button>
            <IconButton size='xs' icon={<BiSearch  color="#000000" />} />
            <IconButton size='sm' icon={<BiSearch  color="#000000" />} />
            <IconButton size='lg' icon={<BiSearch  color="#000000" />} />
            <IconButton size='xs' circle icon={<BiSearch  color="#000000" />} />
            <IconButton size='sm' circle icon={<BiSearch  color="#000000" />} />
            <IconButton size='lg' circle icon={<BiSearch  color="#000000" />} />
        </div>
    )
}