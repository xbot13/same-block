
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
    focusVisible?: string;
}

interface Props extends SwitchProps {
    classes: Styles;
}

const IOSSwitch = withStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 42,
            height: 26,
            padding: 0,
            margin: theme.spacing(1),
        },
        switchBase: {
            padding: 1,
            '&$checked': {
                transform: 'translateX(16px)',
                color: theme.palette.background.default,
                '& + $track': {
                    backgroundColor: theme.palette.secondary.main,
                    opacity: 1,
                    border: 'none',
                },
            },
            '&$focusVisible $thumb': {
                color: theme.palette.secondary.main,
                border: '6px solid #fff',
            },
        },
        thumb: {
            width: 24,
            backgroundColor: theme.palette.background.default,
            height: 24,
        },
        track: {
            borderRadius: 26 / 2,
            border: `1px solid ${theme.palette.background.default}`,
            backgroundColor: theme.palette.secondary.main,
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'border']),
        },
        checked: {},
        focusVisible: {},
    }),
)(({ classes, ...props }: Props) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

export default IOSSwitch