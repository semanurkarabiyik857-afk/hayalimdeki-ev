import React from 'react';
import { FilterContainer, SearchInput, FilterButtons, Button } from './FilterBar.styles';

const FilterBar = ({ searchTerm, setSearchTerm, activeCategory, setActiveCategory, categories }) => {
    return (
        <FilterContainer>
            <FilterButtons>
                <Button
                    $active={activeCategory === 'Tümü'}
                    onClick={() => setActiveCategory('Tümü')}
                >
                    Tümü
                </Button>
                {categories.map(cat => (
                    <Button
                        key={cat}
                        $active={activeCategory === cat}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </Button>
                ))}
            </FilterButtons>

            <SearchInput
                type="text"
                placeholder="Oda ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </FilterContainer>
    );
};

export default FilterBar;
