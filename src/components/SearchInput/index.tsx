import { TextInputProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Container, Search, SearchButton } from './styles';
import { useTheme } from 'styled-components';

interface SearchInputProps extends TextInputProps {
    onSearch?: () => void;
}

export function SearchInput({ onSearch, ...rest }: SearchInputProps) {

    const theme = useTheme()
    return (
        <Container>
            {/* @ts-ignore */}
            <Search
                {...rest}
            />
            <SearchButton
                onPress={onSearch}
                activeOpacity={0.8}
            >
                <Feather
                    size={16}
                    color={theme.colors.primary}
                    name='search'
                />
            </SearchButton>
        </Container>
    )
}