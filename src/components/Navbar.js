import { AppBar, Stack, styled, Toolbar, Typography } from '@mui/material';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});
const Navbar = () => {
	return (
		<AppBar position="stick">
			<StyledToolbar>
				<Typography
					variant="h6"
					fontWeight={500}
					letterSpacing={4}
					sx={{ display: { xs: 'none', sm: 'block' } }}
				>
					<Stack direction="row" alignItems="center" gap={1}>
						<GroupOutlinedIcon /> Civitas
					</Stack>
				</Typography>
				<GroupOutlinedIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
			</StyledToolbar>
		</AppBar>
	);
};

export default Navbar;
