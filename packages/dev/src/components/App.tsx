import {
    Button,
    IconButton,
    TextInput,
    TextArea,
    FormControl,
    Spinner,
    Checkbox,
    Radio,
    Select
} from '../../../core/src';
import { BiArrowToRight, BiChevronDown, BiChevronRight, BiSearch } from 'react-icons/bi';

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

                    <h3>As <em>a</em> component</h3>
                    <Button className='mt-2' as="a" href="/" leadingVisual={<BiSearch size={"1.1em"} color="inherit" />}>This is a link</Button>

                    <h3>Display Button</h3>
                    <Button
                        className='mt-2 w-full'
                        leadingVisual={<BiSearch size={"1.1em"} color="inherit" />}
                        trailingVisual={
                            <BiChevronRight size={"1.1em"}
                                color="inherit"
                                className='ml-auto'
                            />
                        }
                        trailingVisualProps={{ className: "ml-auto" }}
                    >
                        Next Page
                    </Button>

                    <h2>IconButton</h2>
                    <h3>Sizes</h3>
                    {(["xs", "sm", "lg"] as const).map(size => (
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

                    <h3>Addons</h3>
                    <TextInput rootProps={{ className: "mt-2" }} placeholder='Search' leadingAddon={<BiSearch className='text-gray-400' />} trailingVisual="per mi." />
                    <TextInput rootProps={{ className: "mt-2" }} placeholder='Search' leadingAddon={<BiSearch className='text-gray-400' />} trailingAddon={<BiChevronDown size={18} className='text-gray-400' />} />

                    <h3>Loading</h3>
                    <TextInput rootProps={{ className: "mt-2" }} placeholder='Search' leadingAddon={<BiSearch className='text-gray-400' />} trailingVisual="per mi." loading />

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

                    <FormControl status='success' className='mt-2'>
                        <FormControl.Label>Enter a Description</FormControl.Label>
                        <TextArea />
                        <FormControl.Caption>This is successful caption</FormControl.Caption>
                    </FormControl>


                    <h2>Spinner</h2>
                    {(["sm", "md", "lg"] as const).map(size => (
                        <Spinner key={size} className='mt-2' size={size} />
                    ))}

                    <h2>Checkbox</h2>
                    <Checkbox className='mt-2' />
                    <Checkbox className='mt-2' label='With a label' />
                    <Checkbox className='mt-2' label='Disabled' disabled />

                    <h2>Radio</h2>
                    <Radio className='mt-2' />
                    <Radio className='mt-2' label='With a label' />
                    <Radio className='mt-2' label='Disabled' disabled />

                    <h2>Select</h2>
                    <Select required>
                        <Select.Option value={"Hello"}>Hello</Select.Option>
                        <Select.Option value={"World"}>World</Select.Option>
                    </Select>

                    <h3>Placeholder</h3>
                    <Select placeholder='Placeholder'>
                        <Select.Option value={"Hello"}>Hello</Select.Option>
                        <Select.Option value={"World"}>World</Select.Option>
                    </Select>

                    <h3>Disabled</h3>
                    <Select
                        placeholder='Placeholder'
                        disabled
                    >
                        <Select.Option value={"Hello"}>Hello</Select.Option>
                        <Select.Option value={"World"}>World</Select.Option>
                    </Select>

                    <h3>Option Groups</h3>
                    <Select
                        placeholder='Placeholder'
                    >
                        <Select.OptGroup label="Group 1">
                            <Select.Option value={"Hello"}>Hello</Select.Option>
                            <Select.Option value={"World"}>World</Select.Option>
                        </Select.OptGroup>
                        <Select.OptGroup label="Group 2">
                            <Select.Option value={"Hello"}>Hello</Select.Option>
                            <Select.Option value={"World"}>World</Select.Option>
                        </Select.OptGroup>
                    </Select>
                </article>
            </div>
        </main>
    )
}