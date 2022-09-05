import { IProductVarient } from "container/ProductDetails/types"
import {
    VariantsPopUpWrapper,
    VariantSection,
    Type,
    TypeList,
    ColorPills,
    Pills
} from "./style"

interface IVariantsPopUpProps {
    variantsList: IProductVarient,
    selectedColorVariant: string
    selectedSizeVariant: string
    selectedIntensityVariant: string
    handleColorSelection: (val: string) => void
    handleSizeSelection: (val: string) => void
    handleIntensitySelection: (val: string) => void
}

const VariantsPopUpContent = (props: IVariantsPopUpProps) => {
    const {
        variantsList,
        selectedColorVariant,
        selectedSizeVariant,
        selectedIntensityVariant,
        handleColorSelection,
        handleSizeSelection,
        handleIntensitySelection
    } = props
    const {
        colorList,
        sizeList,
        intensityList
    } = variantsList
    return <VariantsPopUpWrapper>
        <h4>Select variant</h4>
        {colorList?.length
            ? <VariantSection>
                <Type>
                    <p>Color: <span>{selectedColorVariant}</span></p>
                    <p>({colorList.length} options available)</p>
                </Type>
                <TypeList className={'color_variant_section'}>
                    {colorList.map((i, idx) => (
                        <ColorPills colorCode={i.colorCode} addBorder={i.text.toUpperCase() === 'WHITE'}
                            isActivePill={i.text.toUpperCase() === selectedColorVariant.toUpperCase()}
                            onClick={() => handleColorSelection(i.text)}
                            key={'variant_color_pill-' + idx}>
                            <div />
                            <p>{i.text}</p>
                        </ColorPills>
                    ))}
                </TypeList>
            </VariantSection>
            : ''
        }
        {sizeList.length
            ?   <VariantSection>
                <Type>
                    <p>Size: <span>{selectedSizeVariant}</span></p>
                    <p>({sizeList.length} options available)</p>
                </Type>
                <TypeList>
                    {sizeList.map((i, idx) => 
                        <Pills key={'variant_size_pill-' + idx}
                            onClick={() => handleSizeSelection(i)}
                            isActivePill={i === selectedSizeVariant}>
                            {i}
                        </Pills>
                    )}
                </TypeList>
            </VariantSection>
            : ''
        }
        {intensityList.length
            ?   <VariantSection>
                <Type>
                    <p>Intensity: <span>{selectedIntensityVariant}</span></p>
                    <p>({intensityList.length} options available)</p>
                </Type>
                <TypeList>
                    {intensityList.map((i, idx) => 
                        <Pills key={'variant_intensity_pill-' + idx}
                            onClick={() => handleIntensitySelection(i)}
                            isActivePill={i === selectedIntensityVariant}>
                            {i}
                        </Pills>
                    )}
                </TypeList>
            </VariantSection>
            : ''
        }
        </VariantsPopUpWrapper>
}

export default VariantsPopUpContent