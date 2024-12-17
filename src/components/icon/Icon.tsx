'use client';
import colors from '@/theme/colors.theme';
import { useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { BsArrowUpLeft } from 'react-icons/bs';
//

export type IconNameOptions = 'navigate-page' | 'arrow';

type IconProps = {
	size?: number;
	color?: string;
	name: IconNameOptions;
};

const icons: { [key in IconNameOptions]: FC<{ size: number; color: string }> } =
	{
		'navigate-page': BsBoxArrowUpRight,
		arrow: BsArrowUpLeft,
	};
// now
const Icon: FC<IconProps> = ({ name, ...props }) => {
	const IconComponent = icons[name] || BsBoxArrowUpRight;
	const brandColor = useColorModeValue(colors.brand.light, colors.brand.dark);
	const defaultColor = useColorModeValue('#4a4a4a', 'white');
	return (
		<IconComponent
			size={props.size || 22}
			color={
				name == 'arrow' ? brandColor : props.color ? props.color : defaultColor
			}
			{...props}
		/>
	);
};

export default Icon;
