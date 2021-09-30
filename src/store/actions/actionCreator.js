import { position_add_action } from './types';

export default function positionAdd(position) {
    return {
        type: position_add_action,
        text: position
    }
}