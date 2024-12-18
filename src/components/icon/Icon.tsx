'use client';
import colors from '@/theme/colors.theme';
import { useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { BsArrowUpLeft } from 'react-icons/bs';
import { AiOutlineLike } from "react-icons/ai";
import { TfiEye } from "react-icons/tfi";
//

export type IconNameOptions = 'navigate-page' | 'arrow' | 'like' | 'eye';

type IconProps = {
	size?: number;
	color?: string;
	name: IconNameOptions;
};

const icons: { [key in IconNameOptions]: FC<{ size: number; color: string }> } =
	{
		'navigate-page': BsBoxArrowUpRight,
		arrow: BsArrowUpLeft,
		like: AiOutlineLike,
		eye: TfiEye,
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
