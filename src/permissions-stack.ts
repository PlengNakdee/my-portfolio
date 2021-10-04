import { AccountPrincipal, ManagedPolicy, Role } from '@aws-cdk/aws-iam';
import { Construct, Stack, StackProps } from '@aws-cdk/core';

export interface PermissionsProps extends StackProps {
  trustedAccount: string;
}

export class PermissionsStack extends Stack {
  constructor(scope: Construct, id: string, props: PermissionsProps) {
    super(scope, id, props);

    new Role(this, 'ReadRole', {
      assumedBy: new AccountPrincipal(props.trustedAccount),
      roleName: 'cdk-readOnlyRole',
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName('ReadOnlyAccess'),
      ],
    });

    new Role(this, 'WriteRole', {
      assumedBy: new AccountPrincipal(props.trustedAccount),
      roleName: 'cdk-writeRole',
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess'),
      ],
    });
  }

}