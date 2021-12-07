import { StringXMLField, BooleanXMLField, ArrayXMLField, XMLDependencyField, DataValues, MetadataTypes, EnumXMLField, IntegerXMLField, DoubleXMLField, ObjectXMLField } from '@aurahelper/core';

export const LiveChatAgentConfig = {
    assignments: new ObjectXMLField('assignments', 'Assignments')
        .setMinApi(28)
        .setEditable()
        .setFieldKey('profiles')
        .setSortOrder(undefined)
        .addField('profiles', new ObjectXMLField('profiles', 'Profiles')
            .setEditable()
            .setFieldKey('profile')
            .setSortOrder(undefined)
            .addField('profile', new StringXMLField('profile', 'Profile')
                .setEditable()
                .setMetadataType(MetadataTypes.PROFILE)
            )
        )
        .addField('users', new ObjectXMLField('users', 'Users')
            .setEditable()
            .setFieldKey('user')
            .setSortOrder(undefined)
            .addField('user', new StringXMLField('user', 'User')
                .setEditable()
                .linkFieldToSObject('User', 'Username')
            )
        ),
    autoGreeting: new StringXMLField('autoGreeting', 'Auto Greeting')
        .setMinApi(28)
        .setEditable(),
    capacity: new IntegerXMLField('capacity', 'Capacity')
        .setMinApi(28)
        .setEditable(),
    criticalWaitTime: new IntegerXMLField('criticalWaitTime', 'Critical Wait Time')
        .setMinApi(28)
        .setEditable(),
    customAgentName: new StringXMLField('customAgentName', 'Custom Agent Name')
        .setMinApi(29)
        .setEditable(),
    enableAgentFileTransfer: new BooleanXMLField('enableAgentFileTransfer', 'Enable Agent File Transfer')
        .setMinApi(31)
        .setEditable(),
    enableAgentSneakPeek: new BooleanXMLField('enableAgentSneakPeek', 'Enable Agent Sneak Peek')
        .setMinApi(28)
        .setEditable(),
    enableAssistanceFlag: new BooleanXMLField('enableAssistanceFlag', 'Enable Assistance Flag')
        .setMinApi(35)
        .setEditable(),
    enableAutoAwayOnDecline: new BooleanXMLField('enableAutoAwayOnDecline', 'Enable Auto Away On Decline')
        .setMinApi(28)
        .setEditable(),
    enableAutoAwayOnPushTimeout: new BooleanXMLField('enableAutoAwayOnPushTimeout', 'Enable Auto Away On Push Timeout')
        .setMinApi(34)
        .setEditable(),
    enableChatConferencing: new BooleanXMLField('enableChatConferencing', 'Enable Chat Conferencing')
        .setMinApi(34)
        .setEditable(),
    enableChatMonitoring: new BooleanXMLField('enableChatMonitoring', 'Enable Chat Monitoring')
        .setMinApi(29)
        .setEditable(),
    enableChatTransferToAgent: new BooleanXMLField('enableChatTransferToAgent', 'Enable Chat Transfer To Agent')
        .setMinApi(36)
        .setEditable(),
    enableChatTransferToButton: new BooleanXMLField('enableChatTransferToButton', 'Enable Chat Transfer To Button')
        .setMinApi(36)
        .setEditable(),
    enableChatTransferToSkill: new BooleanXMLField('enableChatTransferToSkill', 'Enable Chat Transfer To Skill')
        .setMinApi(36)
        .setEditable(),
    enableLogoutSound: new BooleanXMLField('enableLogoutSound', 'Enable Logout Sound')
        .setMinApi(28)
        .setEditable(),
    enableNotifications: new BooleanXMLField('enableNotifications', 'Enable Notifications')
        .setMinApi(28)
        .setEditable(),
    enableRequestSound: new BooleanXMLField('enableRequestSound', 'Enable Request Sound')
        .setMinApi(28)
        .setEditable(),
    enableSneakPeek: new BooleanXMLField('enableSneakPeek', 'Enable Sneak Peek')
        .setMinApi(29)
        .setEditable(),
    enableVisitorBlocking: new BooleanXMLField('enableVisitorBlocking', 'Enable Visitor Blocking')
        .setMinApi(34)
        .setEditable(),
    enableWhisperMessage: new BooleanXMLField('enableWhisperMessage', 'Enable Whisper Message')
        .setMinApi(29)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(28)
        .setEditable()
        .setRequired(),
    supervisorDefaultAgentStatusFilter: new EnumXMLField('supervisorDefaultAgentStatusFilter', 'Supervisor Default Agent Status Filter')
        .setMinApi(29)
        .setEditable()
        .addEnumValue('Online', 'Online')
        .addEnumValue('Away', 'Away')
        .addEnumValue('Offline', 'Offline'),
    supervisorDefaultButtonFilter: new StringXMLField('supervisorDefaultButtonFilter', 'Supervisor Default Button Filter')
        .setMinApi(29)
        .setEditable(),
    supervisorDefaultSkillFilter: new StringXMLField('supervisorDefaultSkillFilter', 'Supervisor Default Skill Filter')
        .setMinApi(29)
        .setEditable(),
    supervisorSkills: new ObjectXMLField('supervisorSkills', 'Supervisor Skills')
        .setMinApi(29)
        .setEditable()
        .setFieldKey('skill')
        .setSortOrder(undefined)
        .addField('skill', new ArrayXMLField('skill', 'Skill')
            .setEditable()
        ),
    transferableButtons: new ObjectXMLField('transferableButtons', 'Transferable Buttons')
        .setMinApi(31)
        .setEditable()
        .setFieldKey('button')
        .setSortOrder(undefined)
        .addField('button', new ArrayXMLField('button', 'Button')
            .setEditable()
        ),
    transferableSkills: new ObjectXMLField('transferableSkills', 'Transferable Skills')
        .setMinApi(31)
        .setEditable()
        .setFieldKey('skill')
        .setSortOrder(undefined)
        .addField('skill', new ArrayXMLField('skill', 'Skill')
            .setEditable()
        ),
};