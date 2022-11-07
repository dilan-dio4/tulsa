import { Button, IconButton } from '../../../core/src';
import { BiSearch } from 'react-icons/bi';

export default function App() {
    return (
        <div className='max-w-[600px] m-4'>
            <Button className='mt-2' size='xs' leadingVisual={<BiSearch size={"1.1em"} color="inherit" />}>Search</Button>
            <Button className='mt-2' size='sm' leadingVisual={<BiSearch size={"1.1em"} color="inherit" />}>Search</Button>
            <Button className='mt-2' size='md' leadingVisual={<BiSearch size={"1.1em"} color="inherit" />}>Search</Button>
            <Button className='mt-2' size='lg' leadingVisual={<BiSearch size={"1.1em"} color="inherit" />}>Search</Button>
            <IconButton size='xs' icon={<BiSearch size={"1em"} color="inherit" />} />
            <IconButton size='sm' icon={<BiSearch size={"1em"} color="inherit" />} />
            <IconButton size='lg' icon={<BiSearch size={"1em"} color="inherit" />} />
            <IconButton size='xs' circle icon={<BiSearch size={"1em"} color="inherit" />} />
            <IconButton size='sm' circle icon={<BiSearch size={"1em"} color="inherit" />} />
            <IconButton size='lg' circle icon={<BiSearch size={"1em"} color="inherit" />} />
        </div>
    )
}