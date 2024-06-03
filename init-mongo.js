db = db.getSiblingDB('family');

if (db.users.countDocuments() === 0) {
    print('Cleaning DB...');
    db.users.drop();
    db.family.drop();
    db.people.drop();
    db.tags.drop();
    db.calendar.drop();

    print('Creating Indexes ....');
    db.users.createIndex({ uuid: 1 }, { unique: true });
    db.family.createIndex({ uuid: 1 }, { unique: true });
    db.tags.createIndex({ uuid: 1 }, { unique: true });
    db.people.createIndex({ uuid: 1 }, { unique: true });
    db.calendar.createIndex({ uuid: 1 }, { unique: true });

    print('Database initialization completed.');
} else {
    print('Database already initialized.');
}
