module.exports = {
    users: {
        user_id: '',
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        body_goal: '',
        unit_system: '',
        avatar: '',
    },
    exercises: {
        _include: ['*'],
        _exclude: ['id'],
        workout_type: '',
        sets: {id: '', reps: ''},
        users: '',
        completed: '',
        created: '',
    },
    units: {
        id: '',
        name: '',
        name_plural: '',
        abrv: '',
        system: '',
        purpose: '',
    },
    equipment: {
        name: '',
    },
    sets: {
        id: '',
        weight: '',
        weight_units: '',
        distance: '',
        distance_units: '',
        reps: ''
    }
}