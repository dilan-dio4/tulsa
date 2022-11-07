import { Button, IconButton, TextInput, TextArea, FormControl, Spinner } from '../../../core/src';
import { BiSearch } from 'react-icons/bi';

export default function App() {

    return (
        <main className='my-4 bg-[#fdfdfd]'>
        <div className='max-w-[600px] mx-auto'>
            <article className='prose'>
                <h1>Tulsa</h1>
                <h2>Button</h2>
                <h3>Sizes</h3>
                {(["xs", "sm", "md", "lg"] as const).map(size => (
                    <Button key={size} className='mt-2' size={size} leadingVisual={<BiSearch size={"1.1em"} color="inherit" />}>Search</Button>
                ))}
                <h3>Variants</h3>
                {(["Primary", "Secondary", "Invisible"] as const).map(variant => (
                    <Button key={variant} className='mt-2' variant={variant} leadingVisual={<BiSearch size={"1.1em"} color="inherit" />}>Search</Button>
                ))}

                <h2>IconButton</h2>
                <h3>Sizes</h3>
                {(["xs", "sm","lg"] as const).map(size => (
                    <IconButton className='mt-2' key={size} size={size} icon={<BiSearch size={"1em"} color="inherit" />} />
                ))}
                <h3>Variants</h3>
                {(["Primary", "Secondary", "Invisible"] as const).map(variant => (
                    <IconButton className='mt-2' key={variant} variant={variant} icon={<BiSearch size={"1em"} color="inherit" />} />
                ))}
                <h3>Circle</h3>
                <IconButton circle icon={<BiSearch size={"1em"} color="inherit" />} />

                <h3>Button Counter</h3>
                <Button className='mt-2' trailingVisual={<Button.Counter>2</Button.Counter>}>Search</Button>
                
                <h2>TextInput</h2>
                
                <h3>Base</h3>
                <TextInput placeholder='Enter Text' />

                <h3>Visuals</h3>
                <TextInput placeholder='Enter Text' leadingVisual={"$"} trailingVisual="per mi." />
                <TextInput placeholder='Enter Text' leadingVisual={"$"} rootProps={{ className: "mt-4" }} />

                <h2>TextArea</h2>
                <TextArea placeholder='Enter Text' />

                <h2>FormControl</h2>
                
                <h3>Simple</h3>
                <FormControl>
                    <FormControl.Label>Twitter Username</FormControl.Label>
                    <TextInput leadingVisual={"@"} />
                    <FormControl.Caption>This is a neutral caption</FormControl.Caption>
                </FormControl>

                <h3>Success & Error</h3>
                <FormControl status='error' className='my-4'>
                    <FormControl.Label>Twitter Username</FormControl.Label>
                    <TextInput leadingVisual={"@"} />
                    <FormControl.Caption>This is an errored caption</FormControl.Caption>
                </FormControl>

                <FormControl status='success'>
                    <FormControl.Label>Twitter Username</FormControl.Label>
                    <TextInput leadingVisual={"@"} />
                    <FormControl.Caption>This is successful caption</FormControl.Caption>
                </FormControl>

                <h2>Spinner</h2>
                {(["sm", "md", "lg"] as const).map(size => (
                    <Spinner key={size} className='mt-2' size={size} />
                ))}

            </article>
        </div>
        </main>
    )
}