import { Icon, IconNameOptions } from '@/components';
import useCustomStyle from '@/hooks/useCustomStyle';

const HeaderIcon = ({
	name,
	size,
	...props
}: {
	name: IconNameOptions;
	href?: string;
	size?: number;
}) => {
	const { colors } = useCustomStyle();
	return <Icon name={name} size={size || 22} color={colors.dark} {...props} />;
};

export default HeaderIcon;
